import { User } from "../confirmation_mail/User";
import { ConfirmationSmsFactory } from "./ConfirmationSmsFactory";
import { SmsSender } from "./SmsSender";

class ConfirmationSms {
    constructor(
        private confirmationSmsFactory : ConfirmationSmsFactory,
        private smsSender : SmsSender
    ){}

    sendTo(user:User) {
        const sms = this.confirmationSmsFactory.getSms(user);
        this.smsSender.send(sms);
    }
}