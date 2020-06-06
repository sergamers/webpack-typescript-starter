import { CoffeType } from '../../enums/coffee-type';
import { Coffee, CoffeeFactory } from '../../interfaces/model';
import { Americano, Latte, Glasse } from '../coffee/model';

export class FabricClass implements CoffeeFactory {
  public createFactory(type: CoffeType): Coffee {
    switch (type) {
      case CoffeType.americano: return new Americano();
      case CoffeType.latte: return new Latte();
      case CoffeType.glasse: return new Glasse();
    }
  }
}