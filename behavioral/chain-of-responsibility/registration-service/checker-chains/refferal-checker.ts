import {Checker} from "./checker";

export class RefferalChecker extends Checker {
    check(registrationRequest): boolean {
        const isReferral = false;
        if(isReferral) return false;
        return super.check(registrationRequest);
    }
}
