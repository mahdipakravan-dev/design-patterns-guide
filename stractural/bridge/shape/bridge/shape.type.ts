import {ColorType} from "../colors/color.type";

export abstract class ShapeType {
    constructor(public color : ColorType) {}
    abstract draw(params : {width : number , height : number}) :string
    paint() {
        return this.color._color;
    }
}
