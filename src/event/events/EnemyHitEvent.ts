import Enemy from "../../board/character/Enemy";
import Icon from "../../board/character/Icon";

export default class EnemyHitEvent implements IGridEvent {
  static EVENTNAME = 'enemy.hit';

  constructor(private _enemy: Enemy) { }

  get icon() : Icon { return this._enemy.icon }

  get x(): number { return this._enemy.position.x }

  get y(): number { return this._enemy.position.y }

  get eventName() { return EnemyHitEvent.EVENTNAME; }
}