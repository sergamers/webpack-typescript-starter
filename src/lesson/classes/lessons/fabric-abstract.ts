import { CoffeeProcess, Coffee } from '../../interfaces/model';
import { CoffeType } from '../../enums/coffee-type';

export abstract class FabricAbstract implements CoffeeProcess {
  /** Получаем коффе */
  public createCoffee(type: CoffeType) {
    const coffee = this.createFactory(type);

    const res = coffee.createCoffee();

    this.say(res);
  }

  /** Фабрика коффе */
  protected abstract createFactory(type: CoffeType): Coffee;

  /** Что говорит кофемашина */
  protected abstract say(res: string): void;
}