import {LogMessageCreator} from "./logMessageCreator.type";
import {WarningLoggerFactory} from "./WarningLoggerFactory";
import {DebugLoggerFactory} from "./DebugLoggerFactory";

export class DebugLogger extends LogMessageCreator {
    _desc: "Debug something";
    _title: "Debug";

    createLogMessageInstance() {
        return new DebugLoggerFactory();
    }

}
