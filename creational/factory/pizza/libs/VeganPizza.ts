import {Pizza} from "./pizza.type";

export class VeganPizza implements Pizza {
    bake(): Pizza {
        console.log("Baking VeganPizza...")
        return this;
    }

    box(): Pizza {
        console.log("Boxing VeganPizza...")
        return this;
    }

    cut(): Pizza {
        console.log("Cutting VeganPizza...")
        return this;
    }

    prepare(): Pizza {
        console.log("Preparing VeganPizza...")
        return this;
    }
}