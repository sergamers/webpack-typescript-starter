import { CoffeType } from '../enums/coffee-type';

export interface CoffeeProcess {
  /** Процесс приготовления определенного кофе */
  createCoffee(type: CoffeType): void;
}