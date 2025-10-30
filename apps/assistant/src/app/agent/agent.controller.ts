// apps/assistant/src/agent/agent.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AgentService } from './agent.service';

@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Post('suggest')
  async suggest(@Body('text') text: string) {
    return await this.agentService.getSuggestion(text);
  }
}
