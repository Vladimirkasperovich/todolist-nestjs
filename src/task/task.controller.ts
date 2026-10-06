import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { TaskService } from './task.service.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { TaskDto } from './dto/task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiOperation({ summary: 'Create task' })
  @ApiCreatedResponse({
    description: 'Task successfully created',
    type: TaskDto,
  })
  @ApiBadRequestResponse({
    description: 'Invalid request data',
  })
  create(@Body() dto: CreateTaskDto): Promise<TaskDto> {
    return this.taskService.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get task by id' })
  @ApiOkResponse({
    description: 'Task successfully received',
    type: TaskDto,
  })
  @ApiNotFoundResponse({
    description: 'Task not found',
  })
  findById(@Param('id', ParseUUIDPipe) id: string): Promise<TaskDto> {
    return this.taskService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update task' })
  @ApiOkResponse({
    description: 'Task successfully updated',
    type: TaskDto,
  })
  @ApiBadRequestResponse({
    description: 'Invalid request data',
  })
  @ApiNotFoundResponse({
    description: 'Task not found',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateTaskDto,
  ): Promise<TaskDto> {
    return this.taskService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete task' })
  @ApiOkResponse({
    description: 'Task successfully deleted',
  })
  @ApiNotFoundResponse({
    description: 'Task not found',
  })
  delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.taskService.delete(id);
  }
}
