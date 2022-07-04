import {MessageInterface} from "../interfaces/message.types";
import {ProductType} from "../interfaces/product.type";

export class ProductTwitterPublisher implements ProductType {
    publish(message: MessageInterface): ProductType {
        console.log("🔃 Sending Message To <b>Twitter</b> ...")
        console.log("✅ Sending Message To Twitter <b>Done !</b> ...")
        return this;
    }
}
