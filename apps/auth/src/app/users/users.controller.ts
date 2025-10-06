import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ResponseUserDto } from './dto/response-user.dto';
import { plainToInstance } from 'class-transformer';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @ApiOkResponse({ type: ResponseUserDto })
  async create(@Body() createUserDto: CreateUserDto): Promise<ResponseUserDto> {
    const user = await this.usersService.createUser(createUserDto);
    return plainToInstance(ResponseUserDto, user, {
      excludeExtraneousValues: true,
    });
  }

  @Get(':id')
  @ApiOkResponse({ type: ResponseUserDto })
  async findOne(@Param('id') id: string): Promise<ResponseUserDto> {
    const user = await this.usersService.getUserById(id);
    return plainToInstance(ResponseUserDto, user, {
      excludeExtraneousValues: true,
    });
  }

  @Get()
  @ApiOkResponse({ type: [ResponseUserDto] })
  async findAll(): Promise<ResponseUserDto[]> {
    const users = await this.usersService.getUsers();
    return users.map((user) =>
      plainToInstance(ResponseUserDto, user, { excludeExtraneousValues: true })
    );
  }
}
