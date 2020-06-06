import { CoffeeProcess, Coffee } from '../../interfaces/model';
import { CoffeType } from '../../enums/coffee-type';
import { FabricAbstract } from '../lessons/fabric-abstract';
import { FabricClass } from '../lessons/fabric-class';

export class CornCoffeeMachine extends FabricAbstract implements CoffeeProcess {
  protected createFactory(type: CoffeType): Coffee {
    const fabric = new FabricClass();
    return fabric.createFactory(type);
  }

  protected say(res: string) {
    console.log(`Кофе-машина сказала: ${res}`);
  }
}