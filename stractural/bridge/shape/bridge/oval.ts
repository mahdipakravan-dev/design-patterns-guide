import {ShapeType} from "./shape.type";

export class Oval extends ShapeType {
    draw(params) {
        return `<div style='
            border-radius: 50%; background: ${this.paint()};
            height : ${params.height}; width: ${params.width};
            '>    
        </div>`
    }
}
