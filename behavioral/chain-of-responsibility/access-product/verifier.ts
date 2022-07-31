import {IProduct} from "./models/product.type";
import {IUser} from "./models/user.type";

export class Verifier {
    constructor(
        private nextVerifier ?: Verifier
    ) {
    }

    verify(user : IUser, product : IProduct) : boolean {
        if(!this.nextVerifier) {
            return true;
        }
        return this.nextVerifier.verify(user , product)
    }
}
