import {PaymentMethod} from "./method";
import {Order} from "./order";

export class CashPayment implements PaymentMethod {
    pay(order: Order) {
        // super.pay(order);
    }
}
