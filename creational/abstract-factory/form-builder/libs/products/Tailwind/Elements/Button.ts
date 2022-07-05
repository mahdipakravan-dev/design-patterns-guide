import {ButtonType} from "../../../interfaces/button.type";

export class TailwindButton implements ButtonType{
    getClasses() {
        return `bg-red-400 hover:bg-red-500 p-5`
    }
}
