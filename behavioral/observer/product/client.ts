import {ProductOffer} from "./observers/offer";
import {Product} from "./product";
import {ProductOfferObserver} from "./observers/offer.observer";

export class Client {
    updatePrice() {
        const product = new Product(100000)
        product.attach(new ProductOfferObserver());
    }
}
