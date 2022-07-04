import {MessageInterface} from "./message.types";

export abstract class ProductType {
    abstract publish(message : MessageInterface) : ProductType
}
