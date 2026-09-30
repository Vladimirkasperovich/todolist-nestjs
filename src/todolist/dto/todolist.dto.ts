import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TaskDto } from '../../task/dto/task.dto.js';

export class TodolistDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Todolist ID',
  })
  id: string;

  @ApiProperty({
    example: 'Learn NestJS',
    description: 'Todolist title',
  })
  title: string;

  @ApiPropertyOptional({
    type: () => TaskDto,
    isArray: true,
    description: 'Tasks belonging to this todolist',
  })
  tasks?: TaskDto[];

  @ApiProperty({
    example: '2026-09-30T10:00:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2026-09-30T10:00:00.000Z',
  })
  updatedAt: Date;
}
