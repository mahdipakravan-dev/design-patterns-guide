import {ThirdPartyLib} from "./youtube.type";
import {YoutubeService} from "./youtube.service";
import {CachedProxy} from "./cached.proxy";

export class Manager {
    constructor(
        service : ThirdPartyLib
    ) {
    }

    renderVideoPage() {}

    reactOnUserInput() {}
}

const aService = new YoutubeService();
const aProxy = new CachedProxy(aService);
const manager = new Manager(aProxy);
