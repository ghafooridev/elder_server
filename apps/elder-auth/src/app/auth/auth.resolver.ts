import { AuthService } from './auth.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../users/user.model';
import { LoginInputDto } from './dto/login-input.dto';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}
  @Mutation(() => User)
  async login(@Args('loginInput') loginInput: LoginInputDto): Promise<User> {
    // Implement login logic here
    return this.authService.login(loginInput, null);
  }
}
