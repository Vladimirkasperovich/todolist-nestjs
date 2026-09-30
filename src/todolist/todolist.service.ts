import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { TodolistDto } from './dto/todolist.dto.js';
import { CreateTodolistDto } from './dto/create-todolist.dto.js';
import { UpdateTodolistTitleDto } from './dto/update-todolist-title.dto.js';

@Injectable()
export class TodolistService {
  constructor(private readonly prismaRepository: PrismaService) {}

  async findAll(): Promise<TodolistDto[]> {
    const todolists = await this.prismaRepository.todolist.findMany({
      include: { tasks: true },
    });
    return todolists;
  }

  async findById(id: string): Promise<TodolistDto> {
    const todolist = await this.prismaRepository.todolist.findUnique({
      where: { id },
      include: { tasks: true },
    });

    if (!todolist) {
      throw new NotFoundException('Todolist not found');
    }

    return todolist;
  }

  async create(dto: CreateTodolistDto): Promise<TodolistDto> {
    return this.prismaRepository.todolist.create({ data: dto });
  }

  async updateTitle(
    id: string,
    dto: UpdateTodolistTitleDto,
  ): Promise<UpdateTodolistTitleDto> {
    await this.findById(id);
    return this.prismaRepository.todolist.update({
      where: { id },
      data: dto,
    });
  }
  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.prismaRepository.todolist.delete({ where: { id } });
  }
}
