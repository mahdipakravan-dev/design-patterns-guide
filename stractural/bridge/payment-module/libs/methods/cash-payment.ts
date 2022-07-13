import {PaymentMethod} from "../payment-method";
import {Invoice} from "../invoice";

export class CashPayment extends PaymentMethod {
    startPay(invoice: Invoice) {
        //cash payment tasks
        this.paymentHandler.pay(invoice);
    }

}
