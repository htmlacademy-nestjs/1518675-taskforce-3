import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  public email: string;

  @ApiProperty({
    description: 'User birth date',
    example: '1981-03-12',

  })
  public dateBirth: string;

  @ApiProperty({
    description: 'User first and second name',
    example: 'Keks',
  })
  public name: string;

  @ApiProperty({
    description: 'User password',
    example: '123456'
  })
  public password: string;

  @ApiProperty({
    description: 'User city',
    example: 'Москва'
  })
  public city: string;

  @ApiProperty({
    description: 'User role',
    example: 'Заказчик'
  })
  public role: string;
}
