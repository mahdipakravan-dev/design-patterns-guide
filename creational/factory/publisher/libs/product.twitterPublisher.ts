import {MessageInterface} from "./message.types";

export class ProductTwitterPublisher implements ProductType {
    publish(message: MessageInterface): ProductType {
        console.log("🔃 Sending Message To <b>Twitter</b> ...")
        console.log("✅ Sending Message To Twitter <b>Done !</b> ...")
        return this;
    }
}
