import {MessageInterface} from "../interfaces/message.types";
import {ProductType} from "../interfaces/product.type";

export class ProductLinkendinPublisher implements ProductType {
    publish(message: MessageInterface): ProductType {
        //TODO Send Message To Linkedin Server
        console.log("🔃 Sending Message To <b>Linkedin</b> ...")
        console.log("✅ Sending Message To Linkedin <b>Done !</b> ...")
        return this;
    }
}
