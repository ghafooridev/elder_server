import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly config: ConfigService) {}

  @Get()
  getData() {
    const port = this.config.getOrThrow('IOT_PORT');
    return { message: `Hello from iot service on port ${port}` };
  }
}
