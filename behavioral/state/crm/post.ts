import {PostStatus} from "./post-status/base";
import {DraftStatus} from "./post-status/draft-status";

export class Post {
    private status : PostStatus
    constructor(
        private title : string,
        private content : string,
    ) {
        this.transitionTo(new DraftStatus())
    }

    transitionTo(postStatus : PostStatus) : void {
        this.status = postStatus;
        this.status.setPost(this);
    }

    moderate() : void{
        this.status.moderation();
    }

    publish(){
        this.status.publish()
    }

    draft() {
        this.status.draft()
    }
}
