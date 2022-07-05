import {PizzaTypes} from "../../PizzaStore";
import {Pizza} from "./pizza.type";
import {PeperoniPizza} from "../products/PeperoniPizza";
import {VeganPizza} from "../products/VeganPizza";
import {SpecialPizza} from "../products/SpecialPizza";
import {BakenPizza} from "../products/BakenPizza";
import {MashromPizza} from "../products/MoshroomPizza";

export abstract class PizzaFactoryInterface {
    abstract makePizza(type : PizzaTypes) : Pizza
}
