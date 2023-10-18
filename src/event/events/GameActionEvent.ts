export default class GameActionEvent implements IEvent {
    static EVENTNAME: string = 'game.action';

    private _currentTime = 0;

    constructor() {
        this._currentTime = Date.now();
    }

    get currentTime(): number {
        return this._currentTime;
    }

    get eventName(): string {
        return GameActionEvent.EVENTNAME;
    }
}