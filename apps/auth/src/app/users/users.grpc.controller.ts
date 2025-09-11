import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { ValidateUserRequest, ValidateUserResponse } from 'types/proto/auth';
import { RoleEnum } from '@prisma-clients/auth';

@Controller()
export class UsersGrpcController {
  constructor(private readonly usersService: UsersService) {}

  @GrpcMethod('UserService', 'ValidateUser')
  async validateUser(
    request: ValidateUserRequest
  ): Promise<ValidateUserResponse> {
    const { userId, role } = request;

    const user = await this.usersService.getUserById(userId);

    if (!user || (role && user.role !== (role as RoleEnum))) {
      return { isValid: false, user: null };
    }

    return {
      isValid: true,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        mobileNumber: user.mobileNumber,
        avatar: user.avatar,
      },
    };
  }
}
