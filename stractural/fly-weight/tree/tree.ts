import {TreeType} from "./tree.type";

export class Tree {
    constructor(
        private x : number,
        private y : number,
        private type : TreeType
    ) {
    }

    draw() {
        console.log(`Drawing Tree X${this.x}/Y${this.y}:${this.type}`)
    }
}
