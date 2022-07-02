export class LogMessageInterface {
    constructor(
        private title : string,
    ) {
    }

    get get_title() : string{
        return this.title
    }
}
