import {MessageInterface} from "./message.types";

abstract class ProductType {
    abstract publish(message : MessageInterface) : ProductType
}
