export class Device {
    private _volume : number = 100
    private _isOn : boolean = false;

    toggle() {
        this._isOn = !this._isOn
    }

    get volume(): number {
        return this._volume;
    }

    set volume(value: number) {
        this._volume = value;
    }
}
