import { Coffee } from '../../../interfaces/model';

export class CapsuleLatte implements Coffee {
  public createCoffee() {
    return 'Капсульный латте готов';
  }
}