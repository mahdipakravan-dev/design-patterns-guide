import {ButtonType} from "../../../interfaces/button.type";

export class BootstrapButton implements ButtonType{
    getClasses() {
        return `btn btn-danger p-0`
    }
}
