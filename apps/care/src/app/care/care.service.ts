import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Inject,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCareDto } from './dto/create-care.dto';
import { UpdateCareDto } from './dto/update-care.dto';
import { Care, Caregiver } from './care.model';
import { AUTH_PACKAGE_NAME, UserServiceClient } from 'types/proto/auth';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CareService implements OnModuleInit {
  private userService: UserServiceClient;

  constructor(
    private readonly prisma: PrismaService,
    @Inject(AUTH_PACKAGE_NAME) private client: ClientGrpc
  ) {}

  onModuleInit() {
    this.userService = this.client.getService<UserServiceClient>('UserService');
  }

  async createCare(
    createCareDto: CreateCareDto,
    caregiverId: string
  ): Promise<Care> {
    const caregiverValidation = await firstValueFrom(
      this.userService.validateUser({ userId: caregiverId, role: 'CAREGIVER' })
    );

    if (!caregiverValidation?.isValid) {
      throw new BadRequestException(
        'Invalid caregiver ID or user is not a caregiver.'
      );
    }

    const care = await this.prisma.care.create({
      data: {
        ...createCareDto,
        caregiverId,
      },
    });

    return care;
  }

  async updateCare(id: string, data: UpdateCareDto): Promise<Care> {
    if (!id) {
      throw new BadRequestException('Care ID is required');
    }

    const care = await this.prisma.care.findUnique({ where: { id } });

    if (!care) {
      throw new NotFoundException('Care not found');
    }

    const updatedCare = await this.prisma.care.update({
      where: { id },
      data,
    });

    return updatedCare;
  }

  async deleteCare(id: string): Promise<{ message: string }> {
    if (!id) {
      throw new BadRequestException('Care ID is required');
    }

    const care = await this.prisma.care.findUnique({ where: { id } });

    if (!care) {
      throw new NotFoundException('Care not found');
    }

    await this.prisma.care.delete({ where: { id } });

    return { message: 'Care deleted successfully' };
  }

  async getCares(caregiverId?: string): Promise<Care[]> {
    const cares = await this.prisma.care.findMany({
      where: caregiverId ? { caregiverId } : {},
    });

    const caresWithCaregiver = await Promise.all(
      cares.map(async (care) => {
        try {
          const caregiverValidation = await firstValueFrom(
            this.userService.validateUser({
              userId: care.caregiverId,
              role: 'CAREGIVER',
            })
          );
          const caregiver: Caregiver | undefined = caregiverValidation?.user
            ? {
                id: caregiverValidation.user.id,
                email: caregiverValidation.user.email,
                role: caregiverValidation.user.role,
                firstName: caregiverValidation.user.firstName,
                lastName: caregiverValidation.user.lastName,
                mobileNumber: caregiverValidation.user.mobileNumber,
                avatar: caregiverValidation.user.avatar,
              }
            : undefined;

          return {
            ...care,
            caregiver,
          } as Care;
        } catch {
          return {
            ...care,
            caregiver: undefined,
          } as Care;
        }
      })
    );

    return caresWithCaregiver;
  }

  async getCare(id: string): Promise<Care> {
    const care = await this.prisma.care.findUnique({ where: { id } });

    if (!care) {
      throw new NotFoundException('Care not found');
    }

    try {
      const caregiverValidation = await firstValueFrom(
        this.userService.validateUser({
          userId: care.caregiverId,
          role: 'CAREGIVER',
        })
      );
      const caregiver: Caregiver | undefined = caregiverValidation?.user
        ? {
            id: caregiverValidation.user.id,
            email: caregiverValidation.user.email,
            role: caregiverValidation.user.role,
            firstName: caregiverValidation.user.firstName,
            lastName: caregiverValidation.user.lastName,
            mobileNumber: caregiverValidation.user.mobileNumber,
            avatar: caregiverValidation.user.avatar,
          }
        : undefined;

      return { ...care, caregiver } as Care;
    } catch {
      return { ...care, caregiver: undefined } as Care;
    }
  }
}
