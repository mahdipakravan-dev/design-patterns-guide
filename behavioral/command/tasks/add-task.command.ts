import {Command} from "./command";
import {AddTaskHandler} from "./add-task-handler";
import {UndoableCommand} from "./command-unduable";

export class AddTaskCommand implements UndoableCommand {


    constructor(
        private title : string,
        private content : string,
        private receiver : AddTaskHandler,
    ) {
    }

    execute(): void {
        this.receiver.execute(this);
    }

    undo(): void {
    }
}
