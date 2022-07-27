import {InvoiceDecorator} from "./invoiceDecorator";

//حق سرویس
export class ServiceInvoicePrice extends InvoiceDecorator{
    price(): number {
        return super.price() + 20000;
    }
}
