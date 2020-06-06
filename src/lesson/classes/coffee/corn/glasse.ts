import { Coffee } from '../../../interfaces/model';

export class Glasse implements Coffee {
  public createCoffee() {
    return 'Гляссе готов';
  }
}