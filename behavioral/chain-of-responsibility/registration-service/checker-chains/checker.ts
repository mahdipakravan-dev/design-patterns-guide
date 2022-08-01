import {RequestType} from "../request.type";

export class Checker {
    constructor(
        private nextChecker : Checker
    ) {
    }

    check(registrationRequest : RequestType) : boolean {
        if(!this.nextChecker) {
            return true;
        }
        return this.nextChecker.check(registrationRequest)
    }
}
