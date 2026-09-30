import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TodolistModule } from './todolist/todolist.module.js';
import { TaskModule } from './task/task.module.js';
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './prisma/prisma.module.js';

@Module({
  imports: [TodolistModule, TaskModule, ConfigModule.forRoot({isGlobal:true}), PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
