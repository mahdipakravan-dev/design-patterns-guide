import { Message } from "../confirmation_mail/Message";

export class Sms {
    constructor(
        private title : string,
        private message : string,
        private phoneNumber : string
    ) {}

    public get getTitle() {
        return this.title;
    }
    public get getMessage() {
        return this.message;
    }
    public get getPhoneNumber() {
        return this.phoneNumber;
    }
}