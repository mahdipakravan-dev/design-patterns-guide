import {FileManagerReceiver} from "../file-manager.receiver";
import {FileCommand} from "../file.command";

export class SaveFileCommand implements FileCommand {
    constructor(
        private fileManager : FileManagerReceiver,
        private file : File
    ) {
    }

    execute(): void {
        this.fileManager.save()
    }
}
