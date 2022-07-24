import {Component} from "./component.type";

export class Leaf extends Component {
    render(): void {
        console.log('OurLeaf is Working' , this._name)
    }
}
