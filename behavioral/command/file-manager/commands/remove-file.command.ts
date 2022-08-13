import {FileManagerReceiver} from "../file-manager.receiver";
import {FileCommand} from "../file.command";

export class RemoveFileCommand implements FileCommand {
    constructor(
        private fileManager : FileManagerReceiver,
        private file : File
    ) {
    }

    execute(): void {
        this.fileManager.remove(this)
    }
}
