import { createClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

export const supabase = (configService: ConfigService) =>
  createClient(
    configService.getOrThrow<string>('FILE_SERVER_URL'),
    configService.getOrThrow<string>('FILE_SERVER_KEY')
  );
