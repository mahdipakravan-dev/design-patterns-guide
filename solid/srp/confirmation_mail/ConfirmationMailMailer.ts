import { TemplatingEngineInterface } from "./TemplatingEngine";
import { ConfirmationMailFactory } from "./ConfirmationMailFactory";
import { MailerInterface } from "./Mailer";
import { Message } from "./Message";
import { TranslatorInterface } from "./Translator";
import { User } from "./User";

class ConfirmationMailMailer {
    private confirmationMailFactory : ConfirmationMailFactory;
    private mailer : MailerInterface;

    constructor(
        confirmationMailFactory : ConfirmationMailFactory,
        mailer : MailerInterface
    ){
        this.confirmationMailFactory = confirmationMailFactory;
        this.mailer = mailer;
    }

    private createMesssageFor(user : User) : Message {
        return this.confirmationMailFactory.createMessageFor(user);    
    }

    public sendTo(user : User){
        const message = this.createMesssageFor(user);
        this.sendMessage(message);
    }

    private sendMessage(message : Message) {
        this.mailer.send(message)
    }

};

const confirmationMailFactory = new ConfirmationMailFactory(
    new TemplatingEngineInterface(),
    new TranslatorInterface()
);
const fara_email_instance = new MailerInterface("fara-email");
const confirmationMailer = new ConfirmationMailMailer(
    confirmationMailFactory,
    fara_email_instance
);
const user = new User();
confirmationMailer.sendTo(user);