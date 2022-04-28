import { MailerInterface } from "./mailerInterface";
import { TemplatingEngineInterface } from "./TemplatingEngineInterface";
import { TranslatorInterface } from "./translatorInterface";

export class User {
    public getConfirmCode() : string {
        return Math.floor(Math.random() * 10).toString()
    }

    public getEmailAddress() : string {
        return "Mahdi@gmail.com"
    }
}
export class Message {
    private subject:string;
    private body:string;
    private emailAddress:string;

    constructor(
        subject,
        body,
        emailAddress
    ){
        this.subject = subject;
        this.body = body;
        this.emailAddress = emailAddress;
    }
}

class ConfirmationMailMailer {
    private templating : TemplatingEngineInterface;
    private translator : TranslatorInterface;
    private mailer : MailerInterface;

    constructor(
        templating : TemplatingEngineInterface,
        translator : TranslatorInterface,
        mailer : MailerInterface
    ){
        this.templating = templating;
        this.translator = translator;
        this.mailer = mailer;
    }

    private createMesssageFor(user : User) : Message {
        const subject = this.translator.translate("Please Confirm Your Email Address");
        const body = this.templating.render("mail.confirm" , [
            "Hello Sir." , 
            "Thanks For Your Signup !", 
            `Your Code is ${user.getConfirmCode()}`,
            "Regards♥"]);
        return new Message(subject,body,user.getEmailAddress())
    }

    public sendTo(user : User){
        const message = this.createMesssageFor(user);
        this.sendMessage(message);
    }

    public sendMessage(message : Message) {
        this.mailer.send(message)
    }

}