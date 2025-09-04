import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { RoleEnum } from '@prisma-clients/elder-auth';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(@Body('createUserInput') createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Patch(':userId')
  // @UseGuards(JwtAuthGuard)
  async update(@Param('userId') userId: string, @Body() user: UpdateUserDto) {
    const _user = await this.userService.updateUser(userId, user);
    return _user;
  }

  @Delete(':userId')
  // @UseGuards(JwtAuthGuard)
  async delete(@Param('userId') userId: string) {
    const _user = await this.userService.deleteUser(userId);
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  @ApiQuery({ name: 'role', enum: RoleEnum, required: false })
  async getAll(@Query('role') role?: RoleEnum) {
    return await this.userService.getUsers();
  }
}
