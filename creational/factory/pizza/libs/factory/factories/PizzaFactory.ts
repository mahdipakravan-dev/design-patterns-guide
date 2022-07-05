import {PizzaTypes} from "../../PizzaStore";
import {Pizza} from "../interfaces/pizza.type";
import {PeperoniPizza} from "../products/PeperoniPizza";
import {VeganPizza} from "../products/VeganPizza";
import {SpecialPizza} from "../products/SpecialPizza";
import {BakenPizza} from "../products/BakenPizza";
import {MashromPizza} from "../products/MoshroomPizza";
import {PizzaFactoryInterface} from "../interfaces/PizzaFactory.type";

export class NewYourkPizzaFactory implements PizzaFactoryInterface{
    makePizza(type : PizzaTypes) : Pizza {
            let pizza : Pizza;
            switch (type) {
                case "peperoni" : {
                    pizza = new PeperoniPizza();
                    break;
                }
                case "vegen" : {
                    pizza = new VeganPizza();
                    break;
                }
                case "special" : {
                    pizza = new SpecialPizza();
                    break;
                }
                case "baken" : {
                    pizza = new BakenPizza();
                    break;
                }
                case "moshrom" : {
                    pizza = new  MashromPizza();
                    break;
                }
            }
            pizza.prepare();
            pizza.bake();
            pizza.cut();
            pizza.box();
            return pizza
    }
}
