import { FabricClass } from '../lessons/fabric-class';
import { CoffeType } from '../../enums/coffee-type';
import { CoffeeProcess } from '../../interfaces/model';

export class CreateCoffeeFromTerminal extends FabricClass implements CoffeeProcess {
  createCoffee(type: CoffeType) {
    const coffee = this.createFactory(type);

    const res = coffee.createCoffee();

    console.log(res + '. Заказ из терменала ');
  }
}