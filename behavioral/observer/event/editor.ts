import {EventManager} from "./types";

export class Editor extends EventManager{
    _file : string
    private events : EventManager

    openFile(address : string) {
        this._file =  address;
        this.events.notify("save")
    }

    saveFile() {
        this.events.notify("save")
    }
}
