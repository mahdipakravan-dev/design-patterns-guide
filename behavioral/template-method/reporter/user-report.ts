export abstract class UserReport {
    protected _dataToExport : Array<string> = [];
    constructor(
        private users:Array<string>
    ) {}

    prepare() {
        return this.users.filter(usr => usr !== "Mahdi");
    }

    generate(){
        this._dataToExport = this.prepare()
        this.export();
    }

    protected abstract export() : void;
}
