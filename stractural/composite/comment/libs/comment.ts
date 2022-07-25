import {CommentComposite, IComment} from "./composite.type";

export class Comment extends CommentComposite {

    showComment() {
        return `
            <div style="border: 1px solid #2c2c2c">
                <h6>${this._comment?.owner} says : </h6>
                <p>${this._comment?.text}</p>
            </div>
        `;
    }
}
