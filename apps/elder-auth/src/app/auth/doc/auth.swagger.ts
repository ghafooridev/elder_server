import { applyDecorators } from '@nestjs/common';
import {
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { LoginDto } from '../dto/login.dto';

export function ApiLoginDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Login user' }),
    ApiBody({ type: LoginDto }),
    ApiResponse({ status: 200, description: 'Return tokens' }),
    ApiUnauthorizedResponse({ description: 'Unauthorized.' })
  );
}

export function ApiLogoutDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Logout user' }),
    ApiResponse({ status: 200, description: 'Clears authentication cookie' })
  );
}
