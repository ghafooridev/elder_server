import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, IsUrl } from 'class-validator';
import { MessageStatus } from '@prisma-clients/talk';

export class UpdateMessageDto {
  @ApiProperty({ description: 'Updated message content', required: false })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiProperty({ description: 'Updated attachment URL', required: false })
  @IsOptional()
  @IsUrl()
  attachmentUrl?: string;

  @ApiProperty({
    enum: MessageStatus,
    description: 'Update message status',
    required: false,
  })
  @IsOptional()
  @IsEnum(MessageStatus)
  status?: MessageStatus;
}
