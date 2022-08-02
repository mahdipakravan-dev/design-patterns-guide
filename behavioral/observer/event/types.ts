export abstract class EventListener {
    update(event : string) {}
}

export class EventManager {
    listeners : EventListener[]

    subscribe(listener : EventListener) {
        this.listeners.push(listener)
    }

    unSubscribe(listener : EventListener) {
        this.listeners.push(listener)
    }

    notify(event : string) {
        this.listeners.forEach(lis => lis.update(event))
    }
}
