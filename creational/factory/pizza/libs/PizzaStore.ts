import {PizzaFactoryInterface} from "./PizzaFactory.type";

export type PizzaTypes = "peperoni" |
    "vegen" |
    "special" |
    "baken" |
    "moshrom";
export class PizzaStore {

    constructor(private pizzaFactory : PizzaFactoryInterface) {}

    orderPizza(type : PizzaTypes) {
        const pizza = this.pizzaFactory.makePizza(type);
        pizza.prepare()
            .bake()
            .cut()
            .box();

        console.log("✅ Your Pizza is Ready !")
        return pizza;
    }
}
