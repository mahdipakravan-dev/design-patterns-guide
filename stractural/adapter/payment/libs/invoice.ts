export class Invoice {

    constructor(
        private _amount : number,
        private _orderId : number
    ) {}

    get amount() {
        return this._amount;
    }
}
