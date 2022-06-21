import {PizzaTypes} from "./PizzaStore";
import {Pizza} from "./pizza.type";
import {PeperoniPizza} from "./PeperoniPizza";
import {VeganPizza} from "./VeganPizza";
import {SpecialPizza} from "./SpecialPizza";
import {BakenPizza} from "./BakenPizza";
import {MashromPizza} from "./MoshroomPizza";
import {PizzaFactoryInterface} from "./PizzaFactory.type";

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
            return pizza
    }
}
