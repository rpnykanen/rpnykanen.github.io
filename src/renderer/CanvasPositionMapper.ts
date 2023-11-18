import Icon from "../character/Icon.js";
import { GridOptions } from "../types/Options.js";
import CanvasPosition from "./CanvasPosition.js";

export default class CanvasPositionMapper {

  constructor(private gridOptions: GridOptions) {
  }

  public map = (x: number,y: number, icon: Icon | null): CanvasPosition => {
    const canvasX = x * this.gridOptions.gridSquareWidth + 15;
    const canvasY = y * this.gridOptions.gridSquareHeight + 15;
    return new CanvasPosition(canvasX,canvasY, icon); 
  }

}