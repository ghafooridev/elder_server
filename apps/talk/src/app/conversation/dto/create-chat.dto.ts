import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateConversationDto {
  @ApiProperty({
    description: 'ID of the recipient user',
    example: '3c2e8a91-9876-4cde-b567-abcdef123456',
  })
  @IsUUID('4')
  recipientId: string;
}
