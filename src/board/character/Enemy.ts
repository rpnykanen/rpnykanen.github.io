import Character from "./Character";
import Movement from "./Movement";
import Position from "../Position";

export default abstract class Enemy extends Character {
  /**
   * How many hits the character can take.
   */
  protected _health: number;

  /**
   * All possible movement patterns for the character.
   */
  protected _movements: Array<Movement[]>;

  /**
   * The score value of the enemy.
   */
  protected _score: number;

  /**
   * Tracks which movement the character should do next.
   */
  protected _movementIndex = 0;

  constructor(position: Position, health: number) {
    super();
    // TODO: might be unnecessary to track here since grid already knows.
    this._position = position;
    this._health = health;
    this._movements = [
      [new Movement(0, 0), new Movement(0, 1)],
    ];
  }

  // TODO: might be unnecessary to track here since grid already knows.
  public setPosition = (position: Position, updatePosition = true) => {
    this._position = position;
    updatePosition && this.updateMovementIndex();
  }

  /**
   * Track which step of the movement pattern should be used next.
   */
  private updateMovementIndex() {
    this._movementIndex = (this._movementIndex == (this._movements[0].length - 1))
      ? 0 
      : this._movementIndex + 1;
  }

  public reduceHealth = (damage: number): void => { this._health -= damage; }

  get isDead(): boolean { return this._health <= 0; }

  // TODO: might be unnecessary to track here since grid already knows.
  get position(): Position { return this._position; }

  /**
   * Get the first movement pattern.
   */
  get movement(): Movement { return this._movements[0][this._movementIndex]; }

  // TODO: might be unnecessary to track here since grid already knows.
  /**
   * Get all possible movement positions for the character.
   */
  get possiblePositions(): Position[] {
    return this._movements.map((movementArray) => {
      return new Position(
        this._position.x + movementArray[this._movementIndex].x,
        this._position.y + movementArray[this._movementIndex].y,
      );
    });
  }

  get icon(): HTMLImageElement { return this._icon; }

  get isBoss(): boolean { return false; }

  /**
   * Autoplay relies on this value to calculate.
   */
  get difficulty(): number { return 1; }

  /**
   * How much score killing the enemy yields.
   */
  get score(): number { return this._score; }
}