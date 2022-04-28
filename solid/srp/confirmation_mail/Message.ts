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