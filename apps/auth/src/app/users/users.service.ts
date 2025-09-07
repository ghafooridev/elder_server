import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { Prisma, RoleEnum } from '@prisma-clients/auth';
import { PrismaService } from '../prisma/prisma.service';
import { hash } from 'bcryptjs';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput) {
    await this.ensureUniqueUser(data);

    const hashedPassword = await hash(data.password, 10);

    return this.prisma.user.create({
      data: { ...data, password: hashedPassword },
    });
  }

  async updateUser(id: string, user: UpdateUserDto) {
    if (!id) {
      throw new BadRequestException('User ID is required');
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: user,
    });

    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }

    return updatedUser;
  }

  async deleteUser(id: string) {
    if (!id) {
      throw new BadRequestException('User ID is required');
    }

    const deletedUser = await this.prisma.user.delete({
      where: { id },
    });

    if (!deletedUser) {
      throw new NotFoundException('User not found');
    }

    return deletedUser;
  }

  async getUsers(role?: RoleEnum) {
    return this.prisma.user.findMany({
      where: role ? { role } : {},
    });
  }

  async getUser(where: Prisma.UserWhereUniqueInput) {
    const user = await this.prisma.user.findUnique({ where });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  private async ensureUniqueUser(data: Prisma.UserCreateInput) {
    const { email, mobileNumber } = data;

    if (email) {
      const existingByEmail = await this.prisma.user.findUnique({
        where: { email },
      });
      if (existingByEmail) {
        throw new ConflictException('Email already in use');
      }
    }

    if (mobileNumber) {
      const existingByMobile = await this.prisma.user.findUnique({
        where: { mobileNumber },
      });
      if (existingByMobile) {
        throw new ConflictException('Mobile number already in use');
      }
    }
  }
}
