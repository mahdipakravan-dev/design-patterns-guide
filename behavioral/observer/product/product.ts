import {Observer, SplSubject} from "./splSubject";

export class Product extends SplSubject{
    constructor(
        private price,
    ) {
        super()
    }

    changePrice(price : number) {
        this.price = price
        this.notify()
    }


}
