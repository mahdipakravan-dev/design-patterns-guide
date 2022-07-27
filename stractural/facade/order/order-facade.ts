import {Product} from "./product";
import {QuantityService} from "./quantity-service";
import {DiscountService} from "./discount-service";

export class OrderFacade {

    constructor(
        private quantityService : QuantityService,
        private discountService : DiscountService,
    ) {
    }

    register(product : Product) {
        //Check Quality
        this.quantityService.check(product);
        this.discountService.check(product , "");
        //Apply Discount

        //Register Order
    }
}
