import {ControlBridgeType} from "./controlBridgeType";

export class AdvanceRemoteControl extends ControlBridgeType {
    mute() {
        this._device.volume = 0
    }
}
