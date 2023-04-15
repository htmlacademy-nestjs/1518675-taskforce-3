import {Category} from './category.interface';
import {Tag} from './tag.interface';

export interface Task {
  _id?: string;
  title: string;
  description: string;
  category: Category;
  price: string;
  image: string;
  address: string;
  tags: Tag[];
  city: string;
}
