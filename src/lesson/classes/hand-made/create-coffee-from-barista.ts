import { FabricClass } from '../lessons/fabric-class';
import { CoffeeProcess } from '../../interfaces/model';
import { CoffeType } from '../../enums/coffee-type';

export class CreateCoffeeFromBarista extends FabricClass implements CoffeeProcess {
  public createCoffee(type: CoffeType) {
    const coffee = this.createFactory(type);

    const res = coffee.createCoffee();

    console.log(res);
  }
}