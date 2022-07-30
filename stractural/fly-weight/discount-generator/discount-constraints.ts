export class DiscountConstraints {
    constructor(
        private expirationDate : string,
        private limit : number,
        private minAmount = 0,
        private maxAmount : number,
        private percent : number,
    ) {
    }
}
