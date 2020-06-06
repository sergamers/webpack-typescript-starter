import { CoffeType } from '../../enums/coffee-type';
import { Coffee } from '../../interfaces/model';
import { Americano, Latte, Glasse } from '../coffee/model';

/** Реализация фабричного метода */
class FabricMethod {
  public createCoffee(type: CoffeType) {
    const coffee = this.coffeeFactory(type);

    coffee.createCoffee();
  }

  private coffeeFactory(type: CoffeType): Coffee {
    switch (type) {
      case CoffeType.americano: return new Americano();
      case CoffeType.latte: return new Latte();
      case CoffeType.glasse: return new Glasse();
    }
  }
}
