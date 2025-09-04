import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { Prisma } from '@prisma-clients/elder-auth';
import { PrismaService } from '../prisma/prisma.service';
import { hash } from 'bcryptjs';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput) {
    await this.checkUserExists(data);
    return this.prismaService.user.create({
      data: {
        ...data,
        password: await hash(data.password, 10),
      },
    });
  }

  async updateUser(id: string, user: UpdateUserDto) {
    if (!id) {
      throw new Error('id is not exist');
    }

    const _user = await this.prismaService.user.update({
      where: { id },
      data: user,
    });

    if (!_user) {
      throw new NotFoundException(`User not found`);
    }

    return _user;
  }

  async deleteUser(id: string) {
    if (!id) {
      throw new Error('id is not exist');
    }
    const _user = await this.prismaService.user.delete({
      where: { id },
    });

    if (!_user) {
      throw new NotFoundException(`User not found`);
    }

    return _user;
  }

  async getUsers() {
    const _users = this.prismaService.user.findMany();
    return _users;
  }

  async getUser(args: Prisma.UserWhereUniqueInput) {
    const _user = this.prismaService.user.findUniqueOrThrow({
      where: args,
    });

    if (!_user) {
      throw new NotFoundException(`User not found`);
    }

    return _user;
  }

  async checkUserExists(data: Prisma.UserCreateInput) {
    if (data.email) {
      const existingByEmail = await this.prismaService.user.findUnique({
        where: { email: data.email },
      });
      if (existingByEmail) {
        throw new ConflictException('Email already in use');
      }
    }

    if (data.mobileNumber) {
      const existingByMobile = await this.prismaService.user.findUnique({
        where: { mobileNumber: data.mobileNumber },
      });
      if (existingByMobile) {
        throw new ConflictException('Mobile number already in use');
      }
    }
  }
}
