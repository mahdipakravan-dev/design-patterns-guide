import {ThirdPartyLib} from "./thirdparty.type";
import {ThirdpartyYoutube} from "./thirdparty-youtube";
import {ThirdpartyCached} from "./thirdparty-cached";

export class Manager {
    constructor(
        service : ThirdPartyLib
    ) {
    }

    renderVideoPage() {}

    reactOnUserInput() {}
}

const aService = new ThirdpartyYoutube();
const aProxy = new ThirdpartyCached(aService);
const manager = new Manager(aProxy);
