import { Coffee } from '../../../interfaces/model';

export class CapsuleGlasse implements Coffee {
  public createCoffee() {
    return 'Капсульный гляссе готов';
  }
}