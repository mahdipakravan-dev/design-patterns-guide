import {LogMessageCreator} from "./logMessageCreator.type";
import {WarningLoggerFactory} from "./WarningLoggerFactory";

export class WarningLogger extends LogMessageCreator {
    _desc: "Warning Logger";
    _title: "Warning";
    createLogMessageInstance() {
        return new WarningLoggerFactory();
    }

}
