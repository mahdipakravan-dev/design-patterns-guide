import {Datasource} from "./datasource";

export class FileDatasource implements Datasource {
    readDate(): string {
        console.log("FileDataSource is Reading...")
        return "";
    }

    writeDate(data: string): void {
        console.log("FileDataSource is Writing")
    }

}
