import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InferenceClient } from '@huggingface/inference';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

export type ChatRole = 'system' | 'user' | 'assistant';
export interface ChatMessage {
  role: ChatRole;
  content: string;
}

@Injectable()
export class AnalysisService {
  private client: InferenceClient;

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService
  ) {
    const hfToken = this.config.get<string>('AI_CHAT_TOKEN');
    if (!hfToken) {
      throw new Error('AI_CHAT_TOKEN is required for Hugging Face API');
    }
    this.client = new InferenceClient(hfToken);
  }

  private getDefaultModel(): string {
    const defaultModel = this.config.get<string>('AI_MODEL');
    return defaultModel ?? 'Qwen/Qwen2.5-7B-Instruct';
  }

  private getSystemPrompt(): string {
    return 'You are a medical assistant. Evaluate patient health, flag abnormalities, and give diet & lifestyle recommendations. Be concise and actionable.';
  }

  private buildMessages(ocrPayload: any, userPrompt: string): ChatMessage[] {
    const systemMsg = this.getSystemPrompt();

    // Prefer structured OCR if available, otherwise use plainText
    const contextPayload =
      ocrPayload?.structured || ocrPayload?.plainText || {};
    const contextMsg = `Patient data (OCR):\n${
      typeof contextPayload === 'string'
        ? contextPayload
        : JSON.stringify(contextPayload, null, 2)
    }`;

    return [
      { role: 'system', content: systemMsg },
      { role: 'user', content: contextMsg },
      { role: 'user', content: userPrompt },
    ];
  }

  async chatCompletion(
    model: string,
    messages: ChatMessage[],
    options?: { max_tokens?: number; temperature?: number }
  ): Promise<string> {
    const resolvedModel = model || this.getDefaultModel();
    try {
      const response = await this.client.chatCompletion({
        model: resolvedModel,
        messages,
        max_tokens: options?.max_tokens,
        temperature: options?.temperature,
      } as any);
      // InferenceClient.chatCompletion returns { choices: [{ message: { role, content } }], ... }
      const choice = (response as any).choices?.[0];
      const content = choice?.message?.content ?? choice?.message?.[0]?.content;
      if (!content) {
        throw new Error('No content in response');
      }
      return typeof content === 'string' ? content : JSON.stringify(content);
    } catch (err: any) {
      // Log full error for observability and rethrow a safe error
      console.error('Hugging Face chat error:', {
        message: err?.message,
        name: err?.name,
        stack: err?.stack,
        data: err?.response?.data,
        status: err?.response?.status,
      });
      throw new InternalServerErrorException('AI chat failed');
    }
  }

  async analyzeDocument(
    documentId: string,
    model: string,
    userPrompt: string,
    requestedBy: string
  ) {
    // Fetch OCR result
    const ocrResult = await this.prisma.ocrResult.findUnique({
      where: { documentId },
    });

    if (!ocrResult) throw new InternalServerErrorException('OCR not found');

    const messages = this.buildMessages(
      { structured: ocrResult.structured, plainText: ocrResult.plainText },
      userPrompt
    );

    const aiResponse = await this.chatCompletion(
      model || this.getDefaultModel(),
      messages,
      {
        max_tokens: 500,
      }
    );

    // Save to Analysis table
    const analysis = await this.prisma.analysis.create({
      data: {
        documentId,
        ocrResultId: ocrResult.id,
        model: model || this.getDefaultModel(),
        prompt: userPrompt,
        response: { text: aiResponse },
        status: 'DONE',
        requestedBy,
      },
    });

    return analysis;
  }
}
