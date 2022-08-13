import {FileManagerReceiver} from "../file-manager.receiver";
import {FileCommand} from "../file.command";

export class DownloadFileCommand implements FileCommand {
    constructor(
        private fileManager : FileManagerReceiver,
        private fileId : string
    ) {
    }

    execute(): void {
        this.fileManager.download()
    }
}
