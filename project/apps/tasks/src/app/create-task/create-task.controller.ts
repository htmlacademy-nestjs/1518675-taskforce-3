import {Body, Controller, HttpStatus, Post} from '@nestjs/common';
import {fillObject} from '@project/util/util-core';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {CreateTaskDto} from './dto/create-task.dto';
import {CreateTaskService} from './create-task.service';
import {TaskRdo} from '../advert-task/rdo/task.rdo';

@ApiTags('create-task')
@Controller('create-task')
export class CreateTaskController {
  constructor(
    private readonly createTaskService: CreateTaskService
  ) {
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new task has been successfully created.'
  })
  @Post('add')
  public async create(@Body() dto: CreateTaskDto) {
    const newTask = await this.createTaskService.add(dto);
    return fillObject(TaskRdo, newTask);
  }
}
