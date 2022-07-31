import {Verifier} from "./verifier";
import {SubscriptionVerifier} from "./subscription-verifier";
import {ExpirationVerifier} from "./subscription-expiration";
import {UserActivationVerifier} from "./user-activation-verifier";
import {OnlineCinemaVerifier} from "./online-cinema-verifier";

export class AccessVerifier {

    freeMovieVerifier() : Verifier{
        return new UserActivationVerifier()
    }

    subscriptedMovieVerifier() : Verifier {
        const expirationVerifier = new ExpirationVerifier();
        const subscriptionVerifier = new SubscriptionVerifier(expirationVerifier);
        return new UserActivationVerifier(subscriptionVerifier);
    }

    onlineCinemaVerifier() : Verifier {
        const onlineCinemaVerifier = new OnlineCinemaVerifier()
        return new UserActivationVerifier(onlineCinemaVerifier)
    }
}
