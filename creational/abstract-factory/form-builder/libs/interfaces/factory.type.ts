import {ButtonType} from "./button.type";
import {InputType} from "./input.type";

// Our Abstract Factory
export interface FactoryType {
    _title : string
    createButton() : ButtonType;
    createInput() : InputType;
}
