import {Command} from "../tasks/command";

export class FileServiceInvoker {
    constructor(
        private command : Command,
        private commandBus
    ) {
    }

    download() {}

    save() {}

    remove() {}
}
