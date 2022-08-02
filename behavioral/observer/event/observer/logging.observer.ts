import {EventListener} from "../types";

export class LoggingObserver implements EventListener{
    update(event: string): void {
        console.log('Event Called')
    }
}
