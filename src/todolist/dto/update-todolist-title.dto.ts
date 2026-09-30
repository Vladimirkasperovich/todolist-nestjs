import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodolistTitleDto {
  @ApiProperty({
    description: 'Todolist title',
    example: 'Buy Bread',
    minLength: 3,
    maxLength: 100,
  })
  @IsNotEmpty({ message: 'Title property is required' })
  @IsString({ message: 'Title must be a string' })
  @Length(3, 100, { message: 'Title must be between 3 and 100 characters' })
  title: string;
}
