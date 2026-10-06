import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { TodolistService } from './todolist.service.js';
import { TodolistDto } from './dto/todolist.dto.js';
import { CreateTodolistDto } from './dto/create-todolist.dto.js';
import { UpdateTodolistTitleDto } from './dto/update-todolist-title.dto.js';

@ApiTags('todolists')
@Controller('todolists')
export class TodolistController {
  constructor(private readonly todolistService: TodolistService) {}

  @Get()
  @ApiOperation({ summary: 'Get all todolists' })
  @ApiOkResponse({
    description: 'Todolists successfully received',
    type: TodolistDto,
    isArray: true,
  })
  findAll(): Promise<TodolistDto[]> {
    return this.todolistService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get todolist by id' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Todolist UUID',
  })
  @ApiOkResponse({
    description: 'Todolist successfully received',
    type: TodolistDto,
  })
  @ApiNotFoundResponse({
    description: 'Todolist not found',
  })
  findById(@Param('id', ParseUUIDPipe) id: string): Promise<TodolistDto> {
    return this.todolistService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create todolist' })
  @ApiCreatedResponse({
    description: 'Todolist successfully created',
    type: TodolistDto,
  })
  @ApiBadRequestResponse({
    description: 'Invalid request data',
  })
  create(@Body() dto: CreateTodolistDto): Promise<TodolistDto> {
    return this.todolistService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update todolist title' })
  @ApiOkResponse({
    description: 'Todolist successfully updated',
    type: TodolistDto,
  })
  @ApiNotFoundResponse({
    description: 'Todolist not found',
  })
  updateTitle(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateTodolistTitleDto,
  ): Promise<TodolistDto> {
    return this.todolistService.updateTitle(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete todolist' })
  @ApiNoContentResponse({
    description: 'Todolist successfully deleted',
  })
  @ApiNotFoundResponse({
    description: 'Todolist not found',
  })
  delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.todolistService.delete(id);
  }
}
