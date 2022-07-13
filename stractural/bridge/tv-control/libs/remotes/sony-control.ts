import {ControlBridgeType} from "./controlBridgeType";

export class SonyControl extends ControlBridgeType {
    off(): void {
        console.log("TurningOff Sony")
    }

    on(): void {
        console.log('show sony splash screen')
        console.log("TurningOn Sony")
    }

    setChannel(channel: string): void {
        console.log("ChangeChannel Sony to " , channel)
    }
}
