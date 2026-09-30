import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    description: 'Task title',
    example: 'Learn Swagger',
    minLength: 3,
    maxLength: 100,
  })
  @IsNotEmpty({ message: 'Title property is required' })
  @IsString({ message: 'Title must be a string' })
  @Length(3, 100, {
    message: 'Title must be between 3 and 100 characters',
  })
  title: string;

  @ApiProperty({
    description: 'ID of the todolist that the task belongs to',
    example: '550e8400-e29b-41d4-a716-446655440000',
    format: 'uuid',
  })
  @IsNotEmpty({ message: 'TodolistId can`t be empty' })
  @IsUUID('4', { message: 'TodolistId must be a valid UUID' })
  todolistId: string;
}
