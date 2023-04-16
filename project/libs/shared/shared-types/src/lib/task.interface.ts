import {Tag} from './tag.interface';
import {Category} from './category.interface';

export interface Task {
  taskId?: number;
  title: string;
  description: string;
  category: Category;
  price: string;
  image: string;
  address: string;
  tags: Tag[];
  city: string;
  userId: string;
}
