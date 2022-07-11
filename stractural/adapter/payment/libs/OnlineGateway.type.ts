import {Invoice} from "./invoice";

export interface OnlineGatewayType {
    _payment_title : string
    startPay(invoice : Invoice) : void
}
