import {Component} from "./component.type";

export class Composite implements Component {
    private component : Array<Component> = [];

    addComponent(component : Component) {
        this.component.push(component)
    }

    render(): void {
        this.component.forEach((component : Component) => {
            component.render();
        })
    }
}
