import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodolistDto {
  @ApiProperty({
    description: 'Todolist title',
    example: 'Learn NestJS',
    minLength: 3,
    maxLength: 100,
  })
  @IsNotEmpty({ message: 'Title can`t be empty' })
  @IsString({ message: 'Title must be a string' })
  @Length(3, 100, {
    message: 'Title must be between 3 and 100 characters',
  })
  title: string;
}
