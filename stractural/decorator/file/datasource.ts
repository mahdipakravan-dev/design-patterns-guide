export abstract class Datasource {
    abstract writeDate(data : string) : void

    abstract readDate() : string
}
