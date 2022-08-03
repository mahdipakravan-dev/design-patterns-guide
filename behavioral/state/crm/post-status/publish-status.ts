import {PostStatus} from "./base";
import {DraftStatus} from "./draft-status";

export class PublishStatus extends PostStatus {
    draft(): void {
        this.post.transitionTo(new DraftStatus())
    }

    moderation(): void {
        throw new Error("You just can go to draft from moderation")
    }

    publish(): void {
        throw new Error("this post currently published ")
    }
}
