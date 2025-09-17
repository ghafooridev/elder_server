import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateConversationDto {
  @ApiProperty({
    description: 'ID of the recipient user',
    example: 'cmfbahmjz0000lv7f6quirhrd',
  })
  @IsString()
  recipientId: string;
}
