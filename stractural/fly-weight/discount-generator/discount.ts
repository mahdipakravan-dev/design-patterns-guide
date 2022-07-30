import {DiscountConstraints} from "./discount-constraints";

export class Discount {


    constructor(
            private _code,
            private _userId = 0,
            private _constraints : DiscountConstraints) {
    }

    get code() {
        return this._code;
    }

    get userId(): number {
        return this._userId;
    }

    get constraints() {
        return this._constraints;
    }
}
