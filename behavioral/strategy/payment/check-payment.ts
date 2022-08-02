import {PaymentMethod} from "./method";
import {Order} from "./order";

export class CheckPayment implements PaymentMethod {
    pay(order: Order): void {
    }

}
