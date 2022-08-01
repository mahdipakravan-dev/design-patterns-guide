import {Checker} from "./checker";

export class PasswordChecker extends Checker {
    check(registrationRequest): boolean {
        const isPasswordValid = true;
        if(!isPasswordValid) return false;
        return super.check(registrationRequest);
    }
}
