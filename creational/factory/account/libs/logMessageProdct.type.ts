import {LogMessageInterface} from "./logMessage.type";

export abstract class LogMessageProduct {
    abstract publish(message : LogMessageInterface);
}
