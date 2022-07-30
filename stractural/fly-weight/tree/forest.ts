import {TreeFactory} from "./tree.factory";
import {Tree} from "./tree";

export class Forest {
    _trees : Array<Tree>
    constructor(private factory : TreeFactory) {
    }

    plantTree(x : number,y : number,color : string , texture : string) {
        const type = this.factory.getTreeType(name , color , texture);
        const tree = new Tree(x,y,type);
        this._trees.push(tree)
    }

    draw() {
        this._trees.forEach(tree => tree.draw())
    }
}
