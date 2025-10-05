import { RoleEnum, GenderEnum, CaregiverType } from '@prisma-clients/auth';
import { Expose } from 'class-transformer';

export class ResponseElderDto {
  @Expose() bloodType?: string;
  @Expose() medicalConditions?: string[];
  @Expose() allergies?: string[];
  @Expose() medications?: string[];
  @Expose() disability?: string;
  @Expose() mobilityStatus?: string;
  @Expose() cognitiveStatus?: string;
  @Expose() maritalStatus?: string;
  @Expose() occupation?: string;
  @Expose() languages?: string[];
  @Expose() religion?: string;
  @Expose() dietaryNeeds?: string;
  @Expose() emergencyContactName?: string;
  @Expose() emergencyContactPhone?: string;
  @Expose() emergencyContactRelation?: string;
}

export class ResponseCaregiverDto {
  @Expose() caregiverType: CaregiverType;
  @Expose() specialization?: string;
  @Expose() licenseNumber?: string;
  @Expose() experienceYears?: number;
  @Expose() languages?: string[];
  @Expose() available?: boolean;
}

export class ResponseRelativeDto {
  @Expose() relationshipToElder: string;
  @Expose() elderId: string;
}

export class ResponseUserDto {
  @Expose()
  id: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;

  @Expose()
  mobileNumber?: string;

  @Expose()
  nationalityCode?: string;

  @Expose()
  gender?: GenderEnum;

  @Expose()
  dateOfBirth?: Date;

  @Expose()
  role: RoleEnum;

  @Expose()
  elder?: ResponseElderDto;

  @Expose()
  caregiver?: ResponseCaregiverDto;

  @Expose()
  relative?: ResponseRelativeDto;
}
