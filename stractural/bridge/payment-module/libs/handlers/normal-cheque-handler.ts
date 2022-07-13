import {PaymentHandler} from "../payment-handler";
import {Invoice} from "../invoice";

export class SayyadChequeHandler implements PaymentHandler {
    pay(invoice: Invoice): void {
    }
}
