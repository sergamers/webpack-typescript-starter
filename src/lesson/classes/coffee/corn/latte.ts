import { Coffee } from '../../../interfaces/model';

export class Latte implements Coffee {
  public createCoffee() {
    return 'Латте готов';
  }
}