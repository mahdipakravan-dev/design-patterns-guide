import {EventListener} from "../types";

export class EmailObserver implements EventListener{
    update(event: string): void {
        console.log('Event Called')
    }
}
