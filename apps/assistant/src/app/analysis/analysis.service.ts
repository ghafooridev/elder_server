import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { SYSTEM_PROMPT } from './helper/analysis.constant';

export type ChatRole = 'system' | 'user' | 'assistant';

export interface ChatMessage {
  role: ChatRole;
  content: string;
}

@Injectable()
export class AnalysisService {
  private readonly apiKey: string;
  private readonly defaultModel: string;
  private readonly fallbackModels: string[];
  private readonly baseUrl = 'https://openrouter.ai/api/v1/chat/completions';

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService
  ) {
    this.apiKey = this.config.get<string>('AI_CHAT_TOKEN');
    if (!this.apiKey)
      throw new Error('AI_CHAT_TOKEN is required for OpenRouter API');

    this.defaultModel =
      this.config.get<string>('AI_MODEL') ?? 'deepseek/deepseek-chat-v3.1:free';

    // Fallbacks in order if default fails
    this.fallbackModels = [
      'mistralai/mistral-7b-instruct:free',
      'openrouter/auto',
      'mistralai/mixtral-8x7b-instruct:free',
    ];
  }

  /** System-level medical guidance prompt */
  private getSystemPrompt(): string {
    return SYSTEM_PROMPT.trim();
  }

  private buildMessages(
    ocrPayload: { structured?: any; plainText?: string },
    elderInfo: { age?: number; sex?: string; weight?: number; height?: number },
    userPrompt: string
  ): ChatMessage[] {
    const context =
      ocrPayload?.structured?.metrics ||
      ocrPayload?.structured ||
      ocrPayload?.plainText ||
      'No OCR data provided';

    const contextStr =
      typeof context === 'string' ? context : JSON.stringify(context, null, 2);

    const elderInfoStr = Object.entries(elderInfo || {})
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n');

    return [
      { role: 'system', content: this.getSystemPrompt() },
      { role: 'user', content: `Patient Data (OCR):\n${contextStr}` },
      { role: 'user', content: `Elder Info:\n${elderInfoStr}` },
      {
        role: 'user',
        content: `Question:\n${userPrompt}\n\nPlease use the sections: Potential Health Risks, Diet Plan, Exercise, Medications (general, non-prescriptive), Minerals & Vitamins, Foods, Fruits & Drinks, Sleep Schedule, Medicinal Plants. End with “This is not a medical diagnosis. Please consult a healthcare provider.”`,
      },
    ];
  }

  private handleError(err: any): never {
    console.error('OpenRouter chat error:', {
      message: err?.message,
      status: err?.response?.status,
      data: err?.response?.data,
    });
    throw new InternalServerErrorException('AI chat failed');
  }

  private async tryModelRequest(
    modelId: string,
    messages: ChatMessage[],
    options?: { max_tokens?: number; temperature?: number }
  ): Promise<string> {
    const response = await axios.post(
      this.baseUrl,
      {
        model: modelId,
        messages,
        max_tokens: options?.max_tokens ?? 800,
        temperature: options?.temperature ?? 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const content = response.data?.choices?.[0]?.message?.content;
    if (!content) throw new Error('No content in response');
    return content;
  }

  async chatCompletion(
    model: string | undefined,
    messages: ChatMessage[],
    options?: { max_tokens?: number; temperature?: number }
  ): Promise<string> {
    const triedModels = [];
    const modelsToTry = [];

    if (model) {
      modelsToTry.push(model);
    } else {
      modelsToTry.push(this.defaultModel);
    }
    modelsToTry.push(...this.fallbackModels);

    for (const m of modelsToTry) {
      if (triedModels.includes(m)) continue;
      triedModels.push(m);
      try {
        return await this.tryModelRequest(m, messages, options);
      } catch (err: any) {
        console.warn(`Model ${m} failed:`, err.response?.data || err.message);
        // If error is endpoint-not-found, unauthorized, or 404, try next
        if (err.response?.status === 404 || err.response?.status === 400) {
          continue;
        }
        // For other errors, maybe retry or break
      }
    }

    // If all models fail
    this.handleError(new Error('All models failed'));
  }

  async analyzeDocument(
    documentId: string,
    elderInfo: { age?: number; sex?: string; weight?: number; height?: number },
    model: string | undefined,
    userPrompt: string,
    requestedBy: string
  ) {
    const ocrResult = await this.prisma.ocrResult.findUnique({
      where: { documentId },
    });
    if (!ocrResult) {
      throw new InternalServerErrorException('OCR not found');
    }

    const messages = this.buildMessages(
      { structured: ocrResult.structured, plainText: ocrResult.plainText },
      elderInfo,
      userPrompt
    );

    const aiResponse = await this.chatCompletion(model, messages, {
      max_tokens: 700,
      temperature: 0.7,
    });

    return this.prisma.analysis.create({
      data: {
        documentId,
        ocrResultId: ocrResult.id,
        model: model ?? this.defaultModel,
        prompt: userPrompt,
        response: { text: aiResponse },
        status: 'DONE',
        requestedBy,
      },
    });
  }
}
