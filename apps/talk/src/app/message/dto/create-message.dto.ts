import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, IsUrl } from 'class-validator';
import { MessageType } from '@prisma-clients/talk';

export class CreateMessageDto {
  @ApiProperty({ description: 'Conversation ID' })
  @IsString()
  conversationId: string;

  @ApiProperty({ description: 'Sender user ID' })
  @IsString()
  senderId: string;

  @ApiProperty({ description: 'Receiver user ID' })
  @IsString()
  receiverId: string;

  @ApiProperty({ description: 'Message text content', required: false })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiProperty({
    description: 'Attachment URL (image, voice, video)',
    required: false,
  })
  @IsOptional()
  @IsUrl()
  attachmentUrl?: string;

  @ApiProperty({ enum: MessageType, default: MessageType.TEXT })
  @IsOptional()
  @IsEnum(MessageType)
  messageType?: MessageType = MessageType.TEXT;
}
