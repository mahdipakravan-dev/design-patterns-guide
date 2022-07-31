export class Singleton {
    static _instance: Singleton;

    static get getInstance() : Singleton{
        if(!Singleton._instance) Singleton._instance = new Singleton()
        return Singleton._instance
    }

}
