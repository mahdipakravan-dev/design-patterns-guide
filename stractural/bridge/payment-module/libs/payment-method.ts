import {Invoice} from "./invoice";
import {PaymentHandler} from "./payment-handler";

export abstract class PaymentMethod {
    protected constructor(
        private paymentHandler : PaymentHandler
    ) {}
    abstract startPay(invoice : Invoice);
}
