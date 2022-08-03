import {Post} from "../post";

export abstract class PostStatus {
    protected post : Post;

    setPost(post : Post) {
        this.post = post;
    }

    abstract draft() : void
    abstract moderation() : void
    abstract publish() : void
}
