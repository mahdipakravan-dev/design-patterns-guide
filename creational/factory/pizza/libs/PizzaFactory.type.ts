import {PizzaTypes} from "./PizzaStore";
import {Pizza} from "./pizza.type";
import {PeperoniPizza} from "./PeperoniPizza";
import {VeganPizza} from "./VeganPizza";
import {SpecialPizza} from "./SpecialPizza";
import {BakenPizza} from "./BakenPizza";
import {MashromPizza} from "./MoshroomPizza";

export abstract class PizzaFactoryInterface {
    abstract makePizza(type : PizzaTypes) : Pizza
}
