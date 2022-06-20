import {Pizza} from "./pizza.type";

export class BakenPizza implements Pizza {
    bake(): Pizza {
        console.log("Baking BakenPizza...")
        return this;
    }

    box(): Pizza {
        console.log("Boxing BakenPizza...")
        return this;
    }

    cut(): Pizza {
        console.log("Cutting BakenPizza...")
        return this;
    }

    prepare(): Pizza {
        console.log("Preparing BakenPizza...")
        return this;
    }
}