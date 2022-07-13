import {ControlBridgeType} from "./controlBridgeType";

export class SamsungControl extends ControlBridgeType {
    off(): void {
        console.log("TurningOff Sony")
    }

    on(): void {
        console.log("Show sumsung splash screen")
        console.log("TurningOn Sony")
    }

    setChannel(channel: string): void {
        console.log("ChangeChannel Sony to " , channel)
    }
}
