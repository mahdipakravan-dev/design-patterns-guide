import {PostStatus} from "./base";
import {ModerationStatus} from "./moderation-status";

export class DraftStatus extends PostStatus {
    draft(): void {
        this.post.transitionTo(new DraftStatus());
    }

    moderation(): void {
        this.post.transitionTo(new ModerationStatus());
    }

    publish(): void {
        throw new Error("You cant publish draft , please make it moderate before ")
    }
}
