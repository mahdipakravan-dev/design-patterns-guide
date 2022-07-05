import {InputType} from "../../../interfaces/input.type";

export class BootstrapInput implements InputType{
    getClasses() {
        return `input input-danger`
    }
}
