import { Sms } from "./Sms";

export class SmsSender {
    send(sms : Sms) : Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`
                    |Message|
                    PhoneNumber : ${sms.getPhoneNumber}
                    Title : ${sms.getTitle}
                    Message : ${sms.getMessage}
                `);   
                resolve("Message Sent ✅")
            } , 2000)
        })
    }
}