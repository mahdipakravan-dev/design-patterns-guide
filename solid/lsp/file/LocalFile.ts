import {FileInterface} from "./FileInterface";

/*TODO
    *@Problem
*       We Need to change permission for LocalFile
*       But its Cant Implement in GoogleDrive or etc...
*  */
export class LocalFile implements FileInterface {
    copy(): void {
    }

    /* TODO
    *   @Problem
    *       We Should Implement Download in localFile !
    *  */
    download(): void {
    }

    /* TODO
    *   @Problem
    *       You Cant Change return types in subClass
    *  */
    move(): string {
    }

    rename(): void {
    }
}
