import {Verifier} from "./verifier";
import {IUser} from "./models/user.type";
import {IProduct} from "./models/product.type";
import {Subscription} from "./models/subscription";

export class SubscriptionVerifier extends Verifier {
    verify(user: IUser, product: IProduct): boolean | any {
        const subscription = new Subscription().findByUserAndProduct()

        if(!subscription) return false
        return super.verify(user, product);
    }
}
