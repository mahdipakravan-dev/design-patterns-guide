import {LogMessageProduct} from "./logMessageProdct.type";
import {LogMessageInterface} from "./logMessage.type";

export class WarningLoggerFactory extends LogMessageProduct{

    publish(message: LogMessageInterface) {
        console.warn("Something Logged in Warning : " , message.get_title)
    }
}
