import {CommentComposite} from "./composite.type";
import {Comment} from "./comment";

export class ParentComment extends CommentComposite {
    _childComments : Array<CommentComposite>
    addChildes(comments : Array<CommentComposite>) {
        this._childComments = comments;
    }
    showComment(): string {
        return `
            <div style="border: 1px dashed #2c2c2c; padding: 10px">
                ${this._comment ? (`
                    <div style="padding: 2px">
                        <h6>${this._comment?.owner}</h6>
                        <p>${this._comment?.text}</p>
                    </div>
                `) : ""}
                <div style="${this._comment && "padding-left: 10px"}">
                    ${this._childComments.map(comment => comment.showComment())}
                </div>
            </div>
        `;
    }
}
