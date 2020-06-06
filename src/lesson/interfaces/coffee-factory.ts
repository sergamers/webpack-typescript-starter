import { Coffee } from './model';
import { CoffeType } from '../enums/coffee-type';

export interface CoffeeFactory {
  /** Получаем коффе */
  createFactory(type: CoffeType): Coffee;
}