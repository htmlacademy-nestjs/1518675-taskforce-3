import {AdvertTaskEntity} from '../advert-task/advert-task.entity';
import {Injectable} from '@nestjs/common';
import {CRUDRepository} from '@project/util/util-types';
import {PrismaService} from '../prisma/prisma.service';
import {Task} from '@project/shared/shared-types';
import {TaskQuery} from '../advert-task/query/task.query';
import {DEFAULT_TASK_COUNT_LIMIT} from '../advert-task/advert-task.constant';

@Injectable()
export class AdvertTaskRepository implements CRUDRepository<AdvertTaskEntity, number, Task> {
  constructor(private readonly prisma: PrismaService) {
  }

  public async create(item: AdvertTaskEntity): Promise<Task> {
    return this.prisma.task.create({
      include: {
        category: true,
        tags: true
      },
      data: {
        title: item.title,
        description: item.description,
        price: item.price,
        image: item.image,
        address: item.address,
        city: item.city,
        userId: item.userId,
        tags: {
          create: item.tags
        },
        categoryId: item.categoryId
      }
    });
  }

  public async destroy(taskId: number): Promise<void> {
    await this.prisma.task.delete({
      include: {
        category: true,
        tags: true
      },
      where: {
        taskId
      }
    });
  }

  public findById(taskId: number): Promise<Task | null> {
    return this.prisma.task.findFirst({
      include: {
        category: true,
        tags: true
      },
      where: {
        taskId: Number(taskId)
      }
    });
  }

  public findByTaskName(taskName: string): Promise<Task | null> {
    return this.prisma.task.findFirst({
      include: {
        category: true,
        tags: true
      },
      where: {
        title: taskName
      }
    });
  }

  public find({
                limit = DEFAULT_TASK_COUNT_LIMIT,
                categories = [1],
                sortDirection = 'desc',
                page = 1
  }: TaskQuery): Promise<Task[]> {

    return this.prisma.task.findMany({
      include: {
        category: true,
        tags: true
      },
      where: {
        categoryId: Number(categories[0]),
        // categories: {
        //   some: {
        //     categoryId: {
        //       in: categories
        //     }
        //   }
        // }
      },
      take: Number(limit),
      orderBy: [
        { createdAt: sortDirection }
      ],
      skip: page > 0 ? limit * (page - 1) : undefined,
    });
  }

  public update(taskId: number, item: AdvertTaskEntity): Promise<Task> {
    return this.prisma.task.update({
      include: {
        category: true,
        tags: true
      },
      where: {
        taskId
      },
      data: {
        title: item.title,
        description: item.description,
        price: item.price,
        image: item.image,
        address: item.address,
        city: item.city,
        userId: item.userId
      }
    });
  }
}
