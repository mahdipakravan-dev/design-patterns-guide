import {PaymentHandler} from "../payment-handler";
import {Invoice} from "../invoice";

export class SamanGatewayHandler implements PaymentHandler {
    pay(invoice: Invoice): void {
        console.log('HandlePayment using saman')
    }
}
