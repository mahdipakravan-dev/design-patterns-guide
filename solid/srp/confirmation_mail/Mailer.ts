import { Message } from "./Message";

export class MailerInterface {
    constructor(
        private mailer: "node-mailer" | "fara-email"
    ){}
    send(message : Message){
        if(this.mailer === "fara-email") {
            console.log(`
                Email Sent With FaraEmail Successfully✅
            `);
        }
        if(this.mailer === "node-mailer") {
            console.log(`
                Email Sent With Node-Mailer Successfully✅
            `);
        }
    }
}