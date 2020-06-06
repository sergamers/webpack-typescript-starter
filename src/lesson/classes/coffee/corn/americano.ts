import { Coffee } from '../../../interfaces/model';

export class Americano implements Coffee {
  public createCoffee() {
    return 'Американо готов';
  }
}