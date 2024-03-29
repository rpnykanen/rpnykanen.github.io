import {describe, expect, test} from "@jest/globals";
import CanvasPosition from "@renderer/CanvasPosition";
import GridToCanvasPositionMapper from "@renderer/GridToCanvasPositionMapper";

describe('Canvas position and mapper test', () => {
  const gridOptions = {
    "width": 5,
    "height": 10,
    "gridSquareWidth": 40,
    "gridSquareHeight": 40,
    "iconHeight": 25,
    "iconWidth": 20,
    "elementId": "game-container",
    "gameCanvas": "game",
    "effectCanvas": "effect"
  };

  const mapper = new GridToCanvasPositionMapper(gridOptions);

  test('Canvas position', ()=>{
    const canvasPosition: CanvasPosition = mapper.map(1,2,null);
    expect(canvasPosition.isEmpty()).toBeTruthy();
    expect(canvasPosition.iconPositionX).toBe(50);
    expect(canvasPosition.iconPositionY).toBe(87.5);
  });

});