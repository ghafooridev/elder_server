// swagger/user.swagger.ts
import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { RoleEnum } from '@prisma-clients/elder-auth';

export function ApiCreateUserDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Create a new user' }),
    ApiResponse({
      status: 201,
      description: 'User created successfully',
      type: CreateUserDto,
    })
  );
}

export function ApiUpdateUserDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Update an existing user' }),
    ApiResponse({
      status: 200,
      description: 'User updated successfully',
      type: UpdateUserDto,
    })
  );
}

export function ApiDeleteUserDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Delete a user by ID' }),
    ApiResponse({ status: 200, description: 'User deleted successfully' })
  );
}

export function ApiGetAllUsersDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get all users' }),
    ApiQuery({ name: 'role', enum: RoleEnum, required: false }),
    ApiResponse({ status: 200, description: 'List of users' })
  );
}
