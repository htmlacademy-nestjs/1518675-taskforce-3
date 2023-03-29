import {Body, Controller, Get, HttpStatus, Param, Post} from '@nestjs/common';
import {fillObject} from '@project/util/util-core';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {CreateTaskDto} from './dto/create-task.dto';
import {CreateTaskService} from './create-task.service';
import {TaskRdo} from './rdo/task.rdo';

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

  // @ApiResponse({
  //   type: LoggedUserRdo,
  //   status: HttpStatus.OK,
  //   description: 'User has been successfully logged.'
  // })
  // @ApiResponse({
  //   status: HttpStatus.UNAUTHORIZED,
  //   description: 'Password or Login is wrong.',
  // })
  // @Post('login')
  // @HttpCode(HttpStatus.OK)
  // public async login(@Body() dto: LoginUserDto) {
  //   const verifiedUser = await this.authService.verifyUser(dto);
  //   return fillObject(LoggedUserRdo, verifiedUser);
  // }

  @ApiResponse({
    type: TaskRdo,
    status: HttpStatus.OK,
    description: 'Task found'
  })
  @Get(':id')
  public async show(@Param('id') id: string) {
    const existTask = await this.createTaskService.getTask(id);
    return fillObject(TaskRdo, existTask);
  }
}
