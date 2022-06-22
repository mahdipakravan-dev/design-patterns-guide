import {MessagePublisherInterface} from "./creator.types";
import {ProductLinkendinPublisher} from "./product.linkendinPublisher";

export class LinkedInPublisherFactory extends MessagePublisherInterface {
    _desc = "This is Linkedin Publisher";
    _title = "Linkedin Publisher";
    createPublisher(): ProductType {
        return new ProductLinkendinPublisher();
    }
}
