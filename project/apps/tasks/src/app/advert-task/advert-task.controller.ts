import {Controller, Get, HttpStatus, Param} from '@nestjs/common';
import {fillObject} from '@project/util/util-core';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {TaskRdo} from './rdo/task.rdo';
import {AdvertTaskService} from './advert-task.service';

@ApiTags('get-task')
@Controller('get-task')
export class AdvertTaskController {
  constructor(
    private readonly advertTaskService: AdvertTaskService
  ) {
  }

  @ApiResponse({
    type: TaskRdo,
    status: HttpStatus.OK,
    description: 'Task found'
  })
  @Get(':id')
  public async show(@Param('id') id: number) {
    const existTask = await this.advertTaskService.getTask(id);
    return fillObject(TaskRdo, existTask);
  }

  @ApiResponse({
    type: TaskRdo,
    status: HttpStatus.OK,
    description: 'Tasks found'
  })
  @Get('list')
  public async getList() {
    const existTask = await this.advertTaskService.getList();
    return fillObject(TaskRdo, existTask);
  }

  @ApiResponse({
    type: TaskRdo,
    status: HttpStatus.OK,
    description: 'Task updated'
  })
  @Get('update/:id')
  public async update(@Param('id') id: string) {
    const existTask = await this.advertTaskService.updateTask(id);
    return fillObject(TaskRdo, existTask);
  }
}
