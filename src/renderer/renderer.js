import CanvasPosition from './canvasPosition.js';

export default class Renderer {

    static width = 400;
    static height = 600;
    static padding = 10;

    constructor(grid) {
        this.context = document.getElementById("game").getContext("2d");
        this.context.font='14px FontAwesome';
        this.grid = grid;
    }

    drawGrid = () => {
        const padding = Renderer.padding;
        const width = Renderer.width
        const height = Renderer.height

        for (let x = 0; x <= width; x += 40) {
            this.context.moveTo(0.5 + x + padding, padding);
            this.context.lineTo(0.5 + x + padding, height + padding);
        }
        for (let x = 0; x <= height; x += 40) {
            this.context.moveTo(padding, 0.5 + x + padding);
            this.context.lineTo(width + padding, 0.5 + x + padding);
        }
    
        this.context.strokeStyle = "black";
        this.context.stroke();
    }

    updateGrid = (gridSquare) => {
        this.clearGrid(gridSquare);
        if (gridSquare.isEmpty()) return;
        this.renderGrid(gridSquare);
    }

    clearGrid = (gridSquare) => {
        const canvasPosition = new CanvasPosition(gridSquare.getPosition().getX(), gridSquare.getPosition().getY(), true);
        this.context.clearRect(canvasPosition.getX(), canvasPosition.getY(), 30, 30);
    }

    renderGrid = (gridSquare) => {
        const object = gridSquare.getObject();
        const {width, height} = object.getIconSize();
        const canvasPosition = new CanvasPosition(gridSquare.getPosition().getX(), gridSquare.getPosition().getY(), true);
        this.context.drawImage(object.getIcon(), canvasPosition.getX(), canvasPosition.getY(), width, height);
    }

}