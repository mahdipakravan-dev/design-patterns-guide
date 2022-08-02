import {Editor} from "./editor";
import {EmailObserver} from "./observer/email.observer";
import {LoggingObserver} from "./observer/logging.observer";

export class Client {
    config() {
        const editor = new Editor()
        editor.subscribe(new EmailObserver())
        editor.subscribe(new LoggingObserver())
    }
}
