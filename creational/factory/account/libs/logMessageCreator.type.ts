import {LogMessageProduct} from "./logMessageProdct.type";
import {LogMessageInterface} from "./logMessage.type";

export abstract class LogMessageCreator {
    abstract _title : string
    abstract _desc : string
    abstract createLogMessageInstance() : LogMessageProduct;

    publish(message : LogMessageInterface) {
        this
            .createLogMessageInstance()
            .publish(message);
    }
}
