import {ThirdPartyLib} from "./youtube.type";

export class CachedProxy implements ThirdPartyLib {
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
