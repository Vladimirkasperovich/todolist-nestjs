import { Module } from '@nestjs/common';
import { TodolistService } from './todolist.service.js';
import { TodolistController } from './todolist.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [TodolistController],
  providers: [TodolistService],
})
export class TodolistModule {}
