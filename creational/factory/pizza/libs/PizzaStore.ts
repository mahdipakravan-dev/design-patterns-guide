import {Pizza} from "./pizza.type";
import {PeperoniPizza} from "./PeperoniPizza";
import {VeganPizza} from "./VeganPizza";
import {SpecialPizza} from "./SpecialPizza";
import {BakenPizza} from "./BakenPizza";
import {MashromPizza} from "./MoshroomPizza";

export type PizzaTypes = "peperoni" |
    "vegen" |
    "special" |
    "baken" |
    "moshrom";
export class PizzaStore {
    orderPizza(type : PizzaTypes) {
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

        console.log("✅ Your Pizza is Reay !")
        return pizza;
    }
}