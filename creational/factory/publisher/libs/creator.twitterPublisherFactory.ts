import {MessagePublisherInterface} from "./creator.types";
import {ProductLinkendinPublisher} from "./product.linkendinPublisher";
import {ProductTwitterPublisher} from "./product.twitterPublisher";

export class TwitterPublisherFactory extends MessagePublisherInterface {
    _desc = "This is Twitter Publisher";
    _title = "Twitter Publisher";
    createPublisher(): ProductType {
        return new ProductTwitterPublisher();
    }
}
