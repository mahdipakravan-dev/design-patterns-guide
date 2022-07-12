export class Invoice {
    private _title : string
    private _price : number

    get title(): string {
        return this._title;
    }

    set title(title : string) {
        this._title = title
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }
}
