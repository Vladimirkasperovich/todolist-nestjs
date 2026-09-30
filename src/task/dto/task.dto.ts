import { ApiProperty } from '@nestjs/swagger';

export class TaskDto {
  @ApiProperty({
    description: 'Task ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
    format: 'uuid',
  })
  id: string;

  @ApiProperty({
    description: 'Task title',
    example: 'Learn NestJS',
  })
  title: string;

  @ApiProperty({
    description: 'ID of the todolist that the task belongs to',
    example: '550e8400-e29b-41d4-a716-446655440000',
    format: 'uuid',
    nullable: true,
  })
  todolistId: string | null;

  @ApiProperty({
    description: 'Task creation date',
    example: '2026-09-30T10:00:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Task last update date',
    example: '2026-09-30T10:30:00.000Z',
  })
  updatedAt: Date;
}
