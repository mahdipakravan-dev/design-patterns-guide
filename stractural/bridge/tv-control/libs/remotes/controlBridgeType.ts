import {Device} from "../devices/device.type";

export class ControlBridgeType {
    constructor(public _device : Device) {
    }
    on() {
        this._device.toggle()
    }
    off() {
        this._device.toggle()
    }
    setChannel(channel : string) {}
}
