export default class Grid {
    constructor(options) {
        this.options = options;
        this.initialize = () => {
            this.draw();
        };
        this.clearCanvas = () => {
            this.context.clearRect(0, 0, 1000, 1000);
        };
        this.clearPosition = (canvasPositions) => {
            canvasPositions.forEach((canvasPosition) => this.context.clearRect(canvasPosition.gridPositionX, canvasPosition.gridPositionY, 39, 39));
        };
        this.renderIcon = (canvasPositions) => {
            canvasPositions.forEach((canvasPosition) => {
                const icon = canvasPosition.icon;
                icon && this.context.drawImage(icon.image, canvasPosition.iconPositionX, canvasPosition.iconPositionY, icon.width, icon.height);
            });
        };
        this.draw = () => {
            document.getElementById(this.options.elementId)?.append(this.canvas);
            const padding = 10;
            const width = this.options.width * this.options.gridSquareWidth;
            const height = this.options.height * this.options.gridSquareHeight;
            this.drawHorizontal(padding, width, height);
            this.drawVertital(padding, width, height);
            this.context.strokeStyle = "black";
            this.context?.stroke();
        };
        this.drawHorizontal = (padding, width, height) => {
            for (let x = 0; x <= width; x += this.options.gridSquareWidth) {
                const xFrom = 0.5 + x + padding;
                const yFrom = padding;
                const xTo = 0.5 + x + padding;
                const yTo = height + padding;
                this.context?.moveTo(xFrom, yFrom);
                this.context?.lineTo(xTo, yTo);
            }
        };
        this.drawVertital = (padding, width, height) => {
            for (let x = 0; x <= height; x += this.options.gridSquareHeight) {
                const xFrom = padding;
                const yFrom = 0.5 + x + padding;
                const xTo = width + padding;
                const yTo = 0.5 + x + padding;
                this.context?.moveTo(xFrom, yFrom);
                this.context?.lineTo(xTo, yTo);
            }
        };
        this.canvasPadding = 10;
        this.canvas = document.createElement("canvas");
        this.canvas.id = "game";
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '100px';
        this.canvas.style.left = '10px';
        this.context = this.canvas.getContext("2d");
        this.context.canvas.width = this.options.width * this.options.gridSquareWidth + (2 * this.canvasPadding);
        this.context.canvas.height = this.options.height * this.options.gridSquareHeight + 100;
    }
}