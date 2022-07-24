import {ProductComposite} from "./composite.type";

export class Basket implements ProductComposite {

    constructor(
        private _title : string,
        private _products : Array<ProductComposite>,
    ) {}

    addProduct(product : ProductComposite) {
        this._products.push(product)
    }

    getPrice(): number {
        let sum = 0;
        this._products.forEach(product => {
            sum += product.getPrice();
        })
        return sum;
    }

    render() : string {
        return  `
            <div style="border: 1px dashed #2c2c2c">
                <h6>${this._title}</h6>
                ${this._products?.map(product => product.render())}
            </div>
        `
    }

}
