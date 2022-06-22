import {MessagePublisherInterface} from "./creator.types";
import {ProductInstagramPublisher} from "./product.instagramPublisher";

export class InstagramPublisherFactory extends MessagePublisherInterface {
    _desc = "This is Instagram Publisher";
    _title = "Instagram Publisher";
    createPublisher(): ProductType {
        return new ProductInstagramPublisher();
    }
}
