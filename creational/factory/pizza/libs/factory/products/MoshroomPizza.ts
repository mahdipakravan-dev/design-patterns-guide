import {Pizza} from "../interfaces/pizza.type";

export class MashromPizza implements Pizza {
    bake(): Pizza {
        console.log("Baking MashromPizza...")
        return this;
    }

    box(): Pizza {
        console.log("Boxing MashromPizza...")
        return this;
    }

    cut(): Pizza {
        console.log("Cutting MashromPizza...")
        return this;
    }

    prepare(): Pizza {
        console.log("Preparing MashromPizza...")
        return this;
    }
}
