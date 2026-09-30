import { TaskDto } from '../../task/dto/task.dto.js';

export class UpdateTodolistDto {
  title: string;
  tasks?: TaskDto;
}
