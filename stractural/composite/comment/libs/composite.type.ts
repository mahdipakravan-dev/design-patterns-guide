export type IComment = {
    _id : string
    parentId : string
    text : string
    owner : string
}
export abstract class CommentComposite {
    constructor(public _comment ?: IComment) {

    }
    abstract showComment() : string
}
