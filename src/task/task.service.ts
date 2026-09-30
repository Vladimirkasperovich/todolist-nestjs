import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { TaskDto } from './dto/task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: CreateTaskDto): Promise<TaskDto> {
    return this.prismaService.task.create({ data: dto });
  }

  async findById(id: string): Promise<TaskDto> {
    const task = await this.prismaService.task.findUnique({ where: { id } });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  async update(id: string, dto: UpdateTaskDto): Promise<TaskDto> {
    await this.findById(id);
    return this.prismaService.task.update({ where: { id }, data: dto });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.prismaService.task.delete({ where: { id } });
  }
}
