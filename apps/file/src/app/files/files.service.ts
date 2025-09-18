import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class FileService {
  private readonly supabase: SupabaseClient;
  private readonly bucket: string;

  constructor(private readonly configService: ConfigService) {
    this.bucket = this.configService.getOrThrow<string>('SUPABASE_BUCKET');
    const url = this.configService.getOrThrow<string>('SUPABASE_URL');
    // Prefer service role key on the server to avoid RLS issues for uploads
    const serviceKey =
      this.configService.get<string>('SUPABASE_SERVICE_ROLE_KEY') ||
      this.configService.getOrThrow<string>('SUPABASE_KEY');
    this.supabase = createClient(url, serviceKey);
  }

  async getSignedUrl(path: string, expiresIn = 60) {
    const { data, error } = await this.supabase.storage
      .from(this.bucket)
      .createSignedUrl(path, expiresIn);

    if (error) throw error;
    return data.signedUrl;
  }

  getPublicUrl(path: string): string {
    const { data } = this.supabase.storage.from(this.bucket).getPublicUrl(path);
    return data.publicUrl;
  }

  async uploadFile(fileName: string, fileBuffer: Buffer) {
    try {
      // Ensure unique path inside the bucket to avoid collisions
      const uniquePath = `uploads/${Date.now()}-${fileName}`;
      const { data, error } = await this.supabase.storage
        .from(this.bucket)
        .upload(uniquePath, fileBuffer, {
          // default to generic content type; adjust to accept mimetype via RPC if needed
          contentType: 'application/octet-stream',
          upsert: false,
        });

      if (error) throw error;
      return data.path; // store path; caller can convert to public URL or signed URL
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
