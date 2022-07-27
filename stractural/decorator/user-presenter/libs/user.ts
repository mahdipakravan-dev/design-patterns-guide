export class User {
    constructor(
        protected _name : string,
        protected _lastName : string,
        protected _create_at : string,
        protected _updated_at : string,
    ) {
    }

    update() {
    //
    //
    //

    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get create_at(): string {
        return this._create_at;
    }

    set create_at(value: string) {
        this._create_at = value;
    }

    get updated_at(): string {
        return this._updated_at;
    }

    set updated_at(value: string) {
        this._updated_at = value;
    }
}
