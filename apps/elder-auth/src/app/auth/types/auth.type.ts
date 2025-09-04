export interface TokenPayload {
  userId: number;
}

export enum IdentityType {
  EMAIL = 'email',
  MOBILE_NUMBER = 'mobileNumber',
}

export interface ValidateUserParams {
  identityType: IdentityType;
  identityValue: string;
  password: string;
}
