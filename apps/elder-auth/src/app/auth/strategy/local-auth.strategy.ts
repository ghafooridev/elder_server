// import { Strategy } from "passport-local";
// import { PassportStrategy } from "@nestjs/passport";
// import { Injectable, UnauthorizedException } from "@nestjs/common";
// import { ValidateUserParams } from "../types/auth.type";
// import { AuthService } from "../auth.service";

// // just for login

// @Injectable()
// export class LocalAuthStrategy extends PassportStrategy(Strategy) {
//   constructor(private readonly authService: AuthService) {
//     super({ usernameField: "mobileNumber" });
//   }

//   async validate(params: ValidateUserParams) {
//     const user = await this.authService.validateUser(params);
//     if (!user) throw new UnauthorizedException("Invalid credentials");
//     return user;
//   }
// }
