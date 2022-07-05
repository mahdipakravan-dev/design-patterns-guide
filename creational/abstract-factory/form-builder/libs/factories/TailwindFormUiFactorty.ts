import {FactoryType} from "../interfaces/factory.type";
import {BootstrapInput} from "../products/Bootstrap/Elements/Input";
import {BootstrapButton} from "../products/Bootstrap/Elements/Button";
import {TailwindButton} from "../products/Tailwind/Elements/Button";
import {TailwindInput} from "../products/Tailwind/Elements/Input";

export class TailwindFormUiFactorty implements FactoryType {
    _title = "Tailwind"
    createButton() {
        return new TailwindButton();
    }

    createInput() {
        return new TailwindInput();
    }

}
