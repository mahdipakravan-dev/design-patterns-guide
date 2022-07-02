import {LogMessageProduct} from "./logMessageProdct.type";
import {LogMessageInterface} from "./logMessage.type";

export class DebugLoggerFactory extends LogMessageProduct{

    publish(message: LogMessageInterface) {
        console.debug("Something Logged in Debug : " , message.get_title)
    }
}
