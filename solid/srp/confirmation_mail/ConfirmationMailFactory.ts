import { Message } from "./Message";
import { TemplatingEngineInterface } from "./TemplatingEngine";
import { TranslatorInterface } from "./Translator";
import { User } from "./User";

export class ConfirmationMailFactory {
    private templating:TemplatingEngineInterface ;
    private translator:TranslatorInterface ;

    constructor(
        templating:TemplatingEngineInterface,
        translator:TranslatorInterface
    ) {
        this.templating = templating;
        this.translator = translator;
    }

    // Create Confirmation Mail And Return that
    createMessageFor(user : User){
        const subject = this.translator.translate("Please Confirm Your Email Address");
        const body = this.templating.render("mail.confirm" , [
            "Hello Sir." , 
            "Thanks For Your Signup !", 
            `Your Code is ${user.getConfirmCode()}`,
            "Regards♥"]);
        return new Message(subject,body,user.getEmailAddress())
    }
}