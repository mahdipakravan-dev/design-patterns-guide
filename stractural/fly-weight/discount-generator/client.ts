import {DiscountFactory} from "./discount-factory";

export class Client {
    constructor(
        private discountFactory : DiscountFactory
    ) {
    }

    createDiscount() {
        this.discountFactory.createDiscount(
            Math.random().toString(),
            Math.random(),
            "",
            10,
            20,
            0,
            20
        );
    }
}
