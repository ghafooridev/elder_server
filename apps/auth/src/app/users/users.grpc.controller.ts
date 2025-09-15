import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UsersService } from './users.service';
import {
  GetUsersByIdsRequest,
  GetUsersByIdsResponse,
  ValidateUserRequest,
  ValidateUserResponse,
} from 'types/proto/auth';
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

  @GrpcMethod('UserService', 'GetUsersByIds')
  async getUsersByIds(
    request: GetUsersByIdsRequest
  ): Promise<GetUsersByIdsResponse> {
    const users = await this.usersService.getUsersByIds(request.userIds);
    const userProtos = users.map((user) => ({
      id: user.id,
      email: user.email,
      role: user.role as string,
      firstName: user.firstName,
      lastName: user.lastName,
      mobileNumber: user.mobileNumber,
      avatar: user.avatar,
    }));
    return { users: userProtos };
  }
}
