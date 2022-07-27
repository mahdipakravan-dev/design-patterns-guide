import {BaseDecorator} from "./base.decorator";

export class EncriptionDecorator extends BaseDecorator {
    readDate(): string {
        console.log("Just a moment , i decrypting data before start reading...")
        return super.readDate();
    }

    writeDate(data: string) {
        console.log("Just a moment , i encrypting data before start reading...")
        super.writeDate(data);
    }

    get encryptedData() {
        return "This is not encrypted data"
    }
}
