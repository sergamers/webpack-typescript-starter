import { CoffeeFactory, Coffee } from '../../../interfaces/model';
import { CoffeType } from '../../../enums/coffee-type';
import { CupsuleAmericano, CapsuleGlasse, CapsuleLatte } from '../model';

export class FabricCapsuleCoffee implements CoffeeFactory {
  public createFactory(type: CoffeType): Coffee {
    switch (type) {
      case CoffeType.americano: return new CupsuleAmericano();
      case CoffeType.latte: return new CapsuleLatte();
      case CoffeType.glasse: return new CapsuleGlasse();
    }
  }
}