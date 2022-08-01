export class RequestType {

    constructor(
        private _emailAddress,
        private _password,
        private _referralCode,
    ) {
    }

    get emailAddress() {
        return this._emailAddress;
    }

    get password() {
        return this._password;
    }

    get referralCode() {
        return this._referralCode;
    }

}
