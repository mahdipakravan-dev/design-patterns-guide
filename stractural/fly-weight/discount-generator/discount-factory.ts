import {DiscountConstraints} from "./discount-constraints";
import {Discount} from "./discount";

export class DiscountFactory {
    private _constraints : Record<string, DiscountConstraints>
    createDiscount(
        code : string,
        userId : number,
        expirationDate : string,
        limit : number,
        minAmount : number,
        maxAmount : number,
        percent : number,
    ) {
        const constraint = this.createConstraint(expirationDate,limit,minAmount,maxAmount,percent);
        return new Discount(code,userId,constraint);
    }

    createKey(args : Array<string|number>) : string {
        return args.join("_").toString()
    }

    //Just Shared Data
    createConstraint(
        expirationDate : string,
        limit : number,
        minAmount : number,
        maxAmount : number,
        percent : number,
    ) : DiscountConstraints {
        const key = this.createKey([
            expirationDate,
            limit,
            minAmount,
            maxAmount,
            percent
        ]);
        if(!this._constraints[key]) {
            this._constraints[key] = new DiscountConstraints(
                expirationDate,
                limit,
                minAmount,
                maxAmount,
                percent,
            );
        } return this._constraints[key]
    }

    getDiscountList() {
        return this._constraints;
    }
}
