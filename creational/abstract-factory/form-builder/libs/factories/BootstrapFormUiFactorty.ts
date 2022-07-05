import {FactoryType} from "../interfaces/factory.type";
import {BootstrapInput} from "../products/Bootstrap/Elements/Input";
import {BootstrapButton} from "../products/Bootstrap/Elements/Button";

export class BootstrapFormUiFactory implements FactoryType {
    _title = "Bootstrap"
    createButton() {
        return new BootstrapButton();
    }

    createInput() {
        return new BootstrapInput();
    }

}
