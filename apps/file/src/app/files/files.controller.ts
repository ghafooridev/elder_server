import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { FileService } from './files.service';
import { UploadFileRequest, UploadFileResponse } from 'types/proto/file';

@Controller()
export class FilesController {
  constructor(private readonly fileService: FileService) {}

  @GrpcMethod('FileService', 'UploadFile')
  async uploadFile(request: UploadFileRequest): Promise<UploadFileResponse> {
    const { fileName, fileData } = request;
    const path = await this.fileService.uploadFile(
      fileName,
      Buffer.from(fileData)
    );
    const publicUrl = this.fileService.getPublicUrl(path);
    return { fileUrl: publicUrl };
  }
}
