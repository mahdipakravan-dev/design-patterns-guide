import {Datasource} from "./datasource";

export class BaseDecorator implements Datasource {

    constructor(protected wrappee : Datasource) {
    }

    readDate(): string {
        return this.wrappee.readDate();
    }

    writeDate(data: string): void {
        this.wrappee.writeDate(data)
    }
}
