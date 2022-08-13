import {AddTaskHandler} from "./add-task-handler";
import {AddTaskCommand} from "./add-task.command";

export class TaskController {
    add(task : {title : string , content : string}) {
        const addTaskHandler = new AddTaskHandler()
        const addTaskCommand = new AddTaskCommand(
            "Task1",
            "Content",
            addTaskHandler
        );
        addTaskCommand.execute();
    }
}
