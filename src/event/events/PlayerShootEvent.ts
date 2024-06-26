import Position from "../../board/Position";
import IGridEvent from "./IGridEvent";

export default class PlayerShootEvent implements IGridEvent {
  static EVENTNAME = 'player.shoot';

  constructor(private _position: Position) { }

  get x(): number { return this._position.x }

  get y(): number { return this._position.y }

  get eventName() { return 'player.shoot'; }
}