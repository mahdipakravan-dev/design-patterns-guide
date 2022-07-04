import {MessagePublisherInterface} from "../interfaces/creator.types";
import {ProductLinkendinPublisher} from "../products/product.linkendinPublisher";
import {ProductType} from "../interfaces/product.type";

export class LinkedInPublisherFactory extends MessagePublisherInterface {
    _desc = "This is Linkedin Publisher";
    _title = "Linkedin Publisher";
    createPublisher(): ProductType {
        return new ProductLinkendinPublisher();
    }
}
