import {RemoveFileCommand} from "./commands/remove-file.command";
import {Command} from "../tasks/command";

export class FileManagerReceiver {
    save(command : Command) {}

    remove(command : Command) {}

    download(fileCommand : Command) {}
}
