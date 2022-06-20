import {Pizza} from "./pizza.type";

export class PeperoniPizza implements Pizza {
    bake(): Pizza {
        console.log("Baking Peperoni...")
        return this;
    }

    box(): Pizza {
        console.log("Boxing Peperoni...")
        return this;
    }

    cut(): Pizza {
        console.log("Cutting Peperoni...")
        return this;
    }

    prepare(): Pizza {
        console.log("Preparing Peperoni...")
        return this;
    }
}