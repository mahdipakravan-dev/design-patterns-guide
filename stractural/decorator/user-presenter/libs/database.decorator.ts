import {BaseDecorator} from "./base.decorator";

export class DatabaseDecorator extends BaseDecorator {
    update() {
        //may is finds from database
        this.name = "Mahdi";
        this.lastName = "pakravan";
        this.create_at =  "123456";
        this.updated_at =  "213213";
    }

    delete() {
        this.name = ""
        this.lastName = ""
        this.create_at = ""
        this.updated_at = ""
    }


}
