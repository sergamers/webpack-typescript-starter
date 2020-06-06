import { CoffeeProcess, Coffee } from '../../interfaces/model';
import { CoffeType } from '../../enums/coffee-type';
import { FabricAbstract } from '../lessons/fabric-abstract';
import { FabricCapsuleCoffee } from '../coffee/capsule/fabric';

export class CapsuleCoffeeMachine extends FabricAbstract implements CoffeeProcess {
  protected createFactory(type: CoffeType): Coffee {
    const fabric = new FabricCapsuleCoffee();
    return fabric.createFactory(type);
  }

  protected say(res: string) {
    console.log(`Капсульная кофе-машина сказала: ${res}`);
  }
}