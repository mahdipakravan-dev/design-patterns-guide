import {Verifier} from "./verifier";

export class UserActivationVerifier extends Verifier{
    verify(user,product): boolean {
        //Check if user active
        return super.verify(user, product);
    }
}
