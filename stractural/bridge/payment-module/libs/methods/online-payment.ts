import {PaymentMethod} from "../payment-method";
import {Invoice} from "../invoice";
import {PaymentHandler} from "../payment-handler";

export class OnlinePayment extends PaymentMethod {
    startPay(invoice: Invoice) {
        console.log('WeWillPay ONLINE')
        console.log('---ONLINE' , invoice.title)
        console.log('---ONLINE' , invoice.price)
        // this.
    }
}
