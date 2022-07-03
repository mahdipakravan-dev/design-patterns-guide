import {Button} from "./Elements/Button";
import {Input} from "./Elements/Input";

// Our Abstract Factory
export interface FormUiFactory {
    createButton() : Button;
    createInput() : Input;
}
