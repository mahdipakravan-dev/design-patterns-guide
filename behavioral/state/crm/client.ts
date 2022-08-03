import {Post} from "./post";
import {PostStatus} from "./post-status/base";

export class Client {
    publishPost() {
        const post = new Post("sample post" , "desc ")
        post.publish()
    }
}
