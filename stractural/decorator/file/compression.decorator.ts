import {BaseDecorator} from "./base.decorator";

export class CompressionDecorator extends BaseDecorator {
    readDate(): string {
        console.log("Just a moment , i DeCompressing data before start reading...")
        return super.readDate();
    }

    writeDate(data: string) {
        console.log("Just a moment , i compressing data before start reading...")
        super.writeDate(data);
    }
}
