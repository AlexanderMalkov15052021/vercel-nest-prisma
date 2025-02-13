import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: CreateUserDto) {
    const created = await this.prismaService.user.create({
      data: { email: data.email },
    });
    return created;
  }

  async listUsers() {
    return await this.prismaService.user.findMany();
  } 
}
