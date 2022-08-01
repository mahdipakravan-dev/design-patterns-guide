import {Checker} from "./checker";

export class EmailChecker extends Checker {
    check(registrationRequest): boolean {
        const foundedAnotherUserInDb = false
        if(foundedAnotherUserInDb) return false;
        return super.check(registrationRequest);
    }
}
