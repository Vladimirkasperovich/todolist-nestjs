import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty({
    description: 'New task title',
    example: 'Learn Prisma',
    minLength: 3,
    maxLength: 100,
  })
  @IsNotEmpty({ message: 'Title property is required' })
  @IsString({ message: 'Title must be a string' })
  @Length(3, 100, {
    message: 'Title must be between 3 and 100 characters',
  })
  title: string;
}
