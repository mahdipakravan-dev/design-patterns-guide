import {OnlineGatewayType} from "./OnlineGateway.type";
import {Invoice} from "./invoice";

export class ZarinpalProvider implements OnlineGatewayType {
    _payment_title = "ZarinPal🪙"
    startPay(invoice: Invoice): void {
        window.open("https://Zarnipal.com" , "_blank")
    }

}
