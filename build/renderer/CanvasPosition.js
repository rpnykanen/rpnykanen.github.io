import Renderer from "./Renderer.js";
export default class CanvasPosition {
    constructor(_position) {
        this._position = _position;
        this._x = (this._position.x * Renderer.gridSquareWidth + 15);
        this._y = (this._position.y * Renderer.gridSquareWidth + 20);
    }
    get x() { return this._x; }
    get y() { return this._y; }
    get origin() { return this._origin; }
}
