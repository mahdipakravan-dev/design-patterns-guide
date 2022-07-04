//This is CREATOR
import {MessageInterface} from "./message.types";
import {ProductType} from "./product.type";

export abstract class MessagePublisherInterface {
    abstract _title : string
    abstract _desc : string
    abstract createPublisher() : ProductType
    publish(message : MessageInterface) {
        this.createPublisher()
            .publish(message)
        return this;
    };
}
