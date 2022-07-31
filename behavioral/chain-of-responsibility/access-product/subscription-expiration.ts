import {Verifier} from "./verifier";
import {IUser} from "./models/user.type";
import {IProduct} from "./models/product.type";
import {Subscription} from "./models/subscription";

export class ExpirationVerifier extends Verifier {
    verify(user: IUser, product: IProduct): boolean | any {
        const expired = new Subscription().checkExpiration()

        if(expired) return false
        return super.verify(user, product);
    }
}
