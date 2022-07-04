import {MessagePublisherInterface} from "../interfaces/creator.types";
import {ProductInstagramPublisher} from "../products/product.instagramPublisher";
import {ProductType} from "../interfaces/product.type";

export class InstagramPublisherFactory extends MessagePublisherInterface {
    _desc = "This is Instagram Publisher";
    _title = "Instagram Publisher";
    createPublisher(): ProductType {
        return new ProductInstagramPublisher();
    }
}
