import { ConfirmationMailFactory } from "./ConfirmationMailFactory";
import { MailerInterface } from "./Mailer";
import { Message } from "./Message";

export class User {
    public getConfirmCode() : string {
        return Math.floor(Math.random() * 10).toString()
    }

    public getEmailAddress() : string {
        return "Mahdi@gmail.com"
    }
}

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

    public sendMessage(message : Message) {
        this.mailer.send(message)
    }

};