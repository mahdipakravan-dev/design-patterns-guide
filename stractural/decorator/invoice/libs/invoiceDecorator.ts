import {InvoicePrice} from "./invoicePrice";

export class InvoiceDecorator implements InvoicePrice{
    constructor(private invoicePrice : InvoicePrice) {}

    price(): number {
        return this.invoicePrice.price();
    }
}
