import {FormUiFactory} from "../../FormUiFactory";
import {BootstrapInput} from "./Elements/Input";
import {BootstrapButton} from "./Elements/Button";

export class BootstrapFormUiFactory implements FormUiFactory {
    createButton() {
        return new BootstrapButton();
    }

    createInput() {
        return new BootstrapInput();
    }

}
