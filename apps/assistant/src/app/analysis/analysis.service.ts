import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InferenceClient } from '@huggingface/inference';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

export type ChatRole = 'system' | 'user' | 'assistant';

export interface ChatMessage {
  role: ChatRole;
  content: string;
}

interface ChatCompletionResponse {
  choices: Array<{
    message: { role: ChatRole; content: string | object };
  }>;
}

@Injectable()
export class AnalysisService {
  private readonly client: InferenceClient;
  private readonly defaultModel: string;

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService
  ) {
    const hfToken = this.config.get<string>('AI_CHAT_TOKEN');
    if (!hfToken) {
      throw new Error('AI_CHAT_TOKEN is required for Hugging Face API');
    }
    this.client = new InferenceClient(hfToken);
    this.defaultModel =
      this.config.get<string>('AI_MODEL') ?? 'HuggingFaceH4/zephyr-7b-beta';
  }

  /** Master system prompt guiding AI to produce elder-care structured output */
  private getSystemPrompt(): string {
    return `
You are ElderCare AI, a trusted medical assistant for elderly wellness.

Your role:
- Analyze numeric health data (lab results, metrics) to detect abnormalities.
- Provide structured, actionable wellness advice.

When analyzing data:
1. Extract each measurable metric (like glucose, HbA1c, cholesterol).
2. Compare them to general reference ranges for adults.
3. Mark each metric as:
   - "Normal"
   - "Slightly High/Low"
   - "Critical"
4. Explain what that means for elderly health in simple terms.
5. Then, generate the following sections:

- **Potential Health Risks**
- **Diet Plan**
- **Exercise**
- **Medications (general)**
- **Minerals & Vitamins**
- **Foods, Fruits & Drinks**
- **Sleep Schedule**
- **Medicinal Plants**

Rules:
- Always include: “This is not a medical diagnosis. Please consult a healthcare provider.”
- Be concise, structured, and evidence-based.
- Never suggest prescription drugs or exact dosages.
  `.trim();
  }

  /** Build messages for AI including OCR and elder info */
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
      .map(([key, val]) => `${key}: ${val}`)
      .join('\n');

    return [
      { role: 'system', content: this.getSystemPrompt() },
      { role: 'user', content: `Patient Data (OCR):\n${contextStr}` },
      { role: 'user', content: `Elder Info:\n${elderInfoStr}` },
      { role: 'user', content: `Question:\n${userPrompt}` },
    ];
  }

  private handleError(err: any): never {
    console.error('Hugging Face chat error:', {
      message: err?.message,
      name: err?.name,
      stack: err?.stack,
      data: err?.response?.data,
      status: err?.response?.status,
    });
    throw new InternalServerErrorException('AI chat failed');
  }

  async chatCompletion(
    model: string | undefined,
    messages: ChatMessage[],
    options?: { max_tokens?: number; temperature?: number }
  ): Promise<string> {
    const resolvedModel = model ?? this.defaultModel;

    try {
      const response = (await this.client.chatCompletion({
        model: resolvedModel,
        messages: messages as any,
        max_tokens: options?.max_tokens,
        temperature: options?.temperature,
      })) as ChatCompletionResponse;

      const choice = response.choices?.[0];
      const content = choice?.message?.content;

      if (!content) throw new Error('No content in Hugging Face response');

      return typeof content === 'string' ? content : JSON.stringify(content);
    } catch (err) {
      this.handleError(err);
    }
  }

  /** Main function to analyze a document + elder info and save structured AI response */
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
      max_tokens: 700, // a bit higher for full checklist
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
