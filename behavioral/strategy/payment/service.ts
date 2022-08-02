import {PaymentMethod} from "./method";
import {Order} from "./order";

export class Service {
    private _paymentMethod : PaymentMethod

    set paymentMethod(value: PaymentMethod) {
        this._paymentMethod = value;
    }

    pay(order : Order) {
        this._paymentMethod.pay(order)
    }
}
