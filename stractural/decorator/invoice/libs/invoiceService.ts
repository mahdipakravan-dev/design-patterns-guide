import {InvoicePrice} from "./invoicePrice";
import {ServiceInvoicePrice} from "./ServiceInvoicePrice";
import {TaxInvoice} from "./TaxInvoice";

export class InvoiceService{
    calculatePrice() {
        const invoice = new InvoicePrice();
        const serviceInvoicePrice = new ServiceInvoicePrice(invoice);
        const vatServiceInvoicePrice = new TaxInvoice(serviceInvoicePrice);
        return vatServiceInvoicePrice.price()
    }
}
