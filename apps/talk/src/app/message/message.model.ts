import { ApiProperty } from '@nestjs/swagger';
import { MessageStatus, MessageType } from '@prisma-clients/talk';

export class MessageModel {
  @ApiProperty({ description: 'Unique ID of the message' })
  id: string;

  @ApiProperty({ description: 'Conversation ID this message belongs to' })
  conversationId: string;

  @ApiProperty({ description: 'Sender user ID' })
  senderId: string;

  @ApiProperty({ description: 'Receiver user ID' })
  receiverId: string;

  @ApiProperty({ description: 'Text content of the message', required: false })
  content?: string;

  @ApiProperty({
    description: 'Attachment URL (image, voice, video)',
    required: false,
  })
  attachmentUrl?: string;

  @ApiProperty({ enum: MessageType, default: MessageType.TEXT })
  messageType: MessageType;

  @ApiProperty({ enum: MessageStatus, default: MessageStatus.SENT })
  status: MessageStatus;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
