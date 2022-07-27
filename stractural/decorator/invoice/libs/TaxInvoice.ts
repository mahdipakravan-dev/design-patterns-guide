import {InvoiceDecorator} from "./invoiceDecorator";

//قیمت بر اساس مالیات
export class TaxInvoice extends InvoiceDecorator {
    price(): number {
        return super.price() * .91
    }
}
