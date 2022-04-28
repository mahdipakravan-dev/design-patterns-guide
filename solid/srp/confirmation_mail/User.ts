export class User {
    public getConfirmCode() : string {
        return Math.floor(Math.random() * 10).toString()
    }

    public getEmailAddress() : string {
        return "Mahdi@gmail.com"
    }

    public getPhoneNumber() : string{
        return "09369514975"
    }
}