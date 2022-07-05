import {InputType} from "../../../interfaces/input.type";

export class TailwindInput implements InputType{
    getClasses() {
        return `rounded border-red-500`
    }
}
