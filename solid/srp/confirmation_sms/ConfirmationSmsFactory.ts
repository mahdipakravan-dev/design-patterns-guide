import { TranslatorInterface } from "../confirmation_mail/Translator";
import { User } from "../confirmation_mail/User";
import { Sms } from "./Sms";

export class ConfirmationSmsFactory {
    private user : User;
    private translator : TranslatorInterface;
    
    constructor(
        user : User
    ){
        this.user = user;
        this.translator = new TranslatorInterface()
    }

    getSms(user : User) : Sms {
        const title = this.translator.translate("Welcome | DesignPattern Course !");
        const message = this.translator.translate("This is Your Confirmation Code : " + this.user.getConfirmCode());
        const phoneNumber = this.user.getPhoneNumber()

        return new Sms(title , message , phoneNumber)
    }
}