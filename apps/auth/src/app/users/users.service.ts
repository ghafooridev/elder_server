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
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) {
    const { elder, caregiver, relative, ...userData } = createUserDto;

    await this.ensureUniqueUser({ email: userData.email });

    const hashedPassword = await hash(userData.password, 10);

    const createData: Prisma.UserCreateInput = {
      ...userData,
      password: hashedPassword,
    };

    if (userData.role === RoleEnum.ELDER && elder) {
      createData.elder = { create: elder };
    } else if (userData.role === RoleEnum.CAREGIVER && caregiver) {
      createData.caregiver = { create: caregiver };
    } else if (userData.role === RoleEnum.RELATIVE && relative) {
      createData.relative = { create: relative };
    }

    return this.prisma.user.create({
      data: createData,
      include: {
        elder: true,
        caregiver: true,
        relative: true,
      },
    });
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const { elder, caregiver, relative, ...userData } = updateUserDto;

    if (!id) {
      throw new BadRequestException('User ID is required');
    }

    const updateData: Prisma.UserUpdateInput = { ...userData };

    if (elder) {
      updateData.elder = { update: elder };
    } else if (caregiver) {
      updateData.caregiver = { update: caregiver };
    } else if (relative) {
      updateData.relative = { update: relative };
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateData,
      include: {
        elder: true,
        caregiver: true,
        relative: true,
      },
    });

    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }

    return updatedUser;
  }

  async getUserById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        elder: true,
        caregiver: true,
        relative: true,
      },
    });
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
