import {ProductComposite} from "./composite.type";

export class Item implements ProductComposite {
    constructor(private _itemDetail : {
        price : number;
        title ?: string
        desc ?: string
    }) {
    }
    getPrice(): number {
        return this._itemDetail.price;
    }

    render() {
        return (
            `<div style="background: #ffffff; padding: 4px">
                ItemName : : ${this._itemDetail.title}
            </div>`
        );
    }
}
