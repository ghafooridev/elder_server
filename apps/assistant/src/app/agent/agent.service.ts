import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AgentService {
  private readonly baseUrl =
    process.env.EMBEDDING_URL || 'http://ec_embedding:8001';

  async getSuggestion(prompt: string) {
    const res = await axios.post(`${this.baseUrl}/reason`, { text: prompt });
    return res.data.response || res.data.error;
  }
}
