import {UserReport} from "./user-report";

export class Client {

    constructor(protected reporterFactory : UserReport) {
    }

    exportUsers() {
        this.reporterFactory.generate();
    }
}
