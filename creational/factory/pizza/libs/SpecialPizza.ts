import {Pizza} from "./pizza.type";

export class SpecialPizza implements Pizza {
    bake(): Pizza {
        console.log("Baking SpecialPizza...")
        return this;
    }

    box(): Pizza {
        console.log("Boxing SpecialPizza...")
        return this;
    }

    cut(): Pizza {
        console.log("Cutting SpecialPizza...")
        return this;
    }

    prepare(): Pizza {
        console.log("Preparing SpecialPizza...")
        return this;
    }
}