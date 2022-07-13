import {ShapeType} from "./shape.type";

export class Rectangle extends ShapeType {
    draw(params) {
        return `<div style='
            background: ${this.paint()};
            height : ${params.height}; width: ${params.width};
            '>    
        </div>`
    }
}
