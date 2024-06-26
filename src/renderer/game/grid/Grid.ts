import CanvasManager from "@renderer/CanvasManager";
import { GridConfiguration } from "../../../types/Configurations";
import CanvasPosition from "@renderer/CanvasPosition";

export default class Grid {
 
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(
    private gridConfiguration: GridConfiguration,
    canvasManager: CanvasManager
  ) {
    this.canvas = canvasManager.createCanvas('game');
    this.context = this.canvas.getContext('2d')!;
  }

  public initialize = (): void => {
    this.draw();
  }
  
  public clearCanvas = (): void => {
    this.context.clearRect(0, 0, 1000, 1000)
  }

  public clearPosition = (canvasPosition: CanvasPosition): void => {
    // Must be smaller than gridsquare and away from the lines.
    this.context.clearRect(
      canvasPosition.iconPositionX+2,
      canvasPosition.iconPositionY+2,
      this.gridConfiguration.gridSquareWidth-3,
      this.gridConfiguration.gridSquareHeight-3
    );
  }

  public renderIcon = (canvasPosition: CanvasPosition) => {
    const icon = canvasPosition?.icon
    icon && 
    this.context.drawImage(
      icon,
      canvasPosition.iconPositionXWithPadding,
      canvasPosition.iconPositionYWithPadding,
      icon.width,
      icon.height
    );
  }

  private draw = () => {
    document.getElementById(this.gridConfiguration.elementId)?.append(this.canvas);

    const width = this.gridConfiguration.width * this.gridConfiguration.gridSquareWidth;
    const height = this.gridConfiguration.height * this.gridConfiguration.gridSquareHeight;

    this.drawHorizontal(width, height);
    this.drawVertital(width, height);

    this.context.strokeStyle = "black";
    this.context?.stroke();
  }

  private drawHorizontal = (width: number, height: number) => {
    for (let x = 0; x <= width; x += this.gridConfiguration.gridSquareWidth) {
      const xFrom = 0.5 + x;
      const yFrom = 0;
      const xTo = 0.5 + x;
      const yTo = height;

      this.context?.moveTo(xFrom, yFrom);
      this.context?.lineTo(xTo, yTo);
    }
  }

  private drawVertital = (width: number, height: number) => {
    for (let x = 0; x <= height; x += this.gridConfiguration.gridSquareHeight) {
      const xFrom = 0;
      const yFrom = 0.5 + x;
      const xTo = width;
      const yTo = 0.5 + x;
      this.context?.moveTo(xFrom, yFrom);
      this.context?.lineTo(xTo, yTo);
    }
  }

}