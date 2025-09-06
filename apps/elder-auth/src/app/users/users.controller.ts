import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Body,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import {
  ApiCreateUserDocs,
  ApiUpdateUserDocs,
  ApiDeleteUserDocs,
  ApiGetAllUsersDocs,
} from './doc/user.swagger';
import { RoleEnum } from '@prisma-clients/elder-auth';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @ApiCreateUserDocs()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Patch(':userId')
  @UseGuards(JwtAuthGuard)
  @ApiUpdateUserDocs()
  async update(@Param('userId') userId: string, @Body() user: UpdateUserDto) {
    return this.userService.updateUser(userId, user);
  }

  @Delete(':userId')
  @UseGuards(JwtAuthGuard)
  @ApiDeleteUserDocs()
  async delete(@Param('userId') userId: string) {
    return this.userService.deleteUser(userId);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiGetAllUsersDocs()
  async getAll(@Query('role') role?: RoleEnum) {
    return this.userService.getUsers(role);
  }
}
