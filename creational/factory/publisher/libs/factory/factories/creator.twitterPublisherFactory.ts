import {MessagePublisherInterface} from "../interfaces/creator.types";
import {ProductLinkendinPublisher} from "../products/product.linkendinPublisher";
import {ProductTwitterPublisher} from "../products/product.twitterPublisher";
import {ProductType} from "../interfaces/product.type";

export class TwitterPublisherFactory extends MessagePublisherInterface {
    _desc = "This is Twitter Publisher";
    _title = "Twitter Publisher";
    createPublisher(): ProductType {
        return new ProductTwitterPublisher();
    }
}
