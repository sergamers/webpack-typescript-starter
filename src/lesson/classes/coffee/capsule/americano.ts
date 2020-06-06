import { Coffee } from '../../../interfaces/model';

export class CupsuleAmericano implements Coffee {
  public createCoffee() {
    return 'Капсульный американо готов';
  }
}