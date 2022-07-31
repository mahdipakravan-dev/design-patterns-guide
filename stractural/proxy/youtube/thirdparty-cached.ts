import {ThirdPartyLib} from "./thirdparty.type";

export class ThirdpartyCached implements ThirdPartyLib {
    _cachedDB : Record<string, File> = {}
    constructor(
        private service : ThirdPartyLib
    ) {
    }

    downloadVideo(): void {
    }

    getVideoInfo(): void {

    }

    listVideos(): void {
    }

}
