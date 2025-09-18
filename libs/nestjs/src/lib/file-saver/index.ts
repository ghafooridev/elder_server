import { createClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

export const supabase = (configService: ConfigService) =>
  createClient(
    configService.getOrThrow<string>('SUPABASE_URL'),
    configService.getOrThrow<string>('SUPABASE_KEY')
  );
