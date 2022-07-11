import {OnlineGatewayType} from "../OnlineGateway.type";
import {Invoice} from "../invoice";
import {SamanPackage} from "./SamanProvider";

export class SamanProviderAdapter implements OnlineGatewayType {
    _payment_title = "Saman👦"
    _samanGatewayPackage : SamanPackage
    constructor() {
        this._samanGatewayPackage = new SamanPackage();
    }
    startPay(invoice: Invoice): void {
        this._samanGatewayPackage.pay(`${invoice.amount}`);
    }
}
