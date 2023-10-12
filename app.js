const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext("2d");
let mouseDown = false;
let currentColor = 'black';
let currentShape = 'circle';
let brushSize = 5;
let drawingData = [];

function main() {
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

}

const handleMouseDown = (e) => {
    let mouseX = e.offsetX - brushSize/2;
    let mouseY = e.offsetY - brushSize/2;
    mouseDown = true;

    drawCanvas(mouseX, mouseY, currentColor, currentShape, brushSize);
}
const handleMouseMove = (e) => {
    let mouseX = e.offsetX - brushSize/2;
    let mouseY = e.offsetY - brushSize/2;
    if (mouseDown) {
        drawCanvas(mouseX, mouseY, currentColor, currentShape, brushSize);
    }
}
const handleMouseUp = (e) => {
    mouseDown = false;
    console.log(drawingData);
}

const drawCanvas = (mx, my, currentColor, currentShape, brushSize) => {
    ctx.fillStyle = currentColor;
    switch (currentShape) {
        case 'rect':
        ctx.fillRect(mx, my, brushSize, brushSize);
        drawingData.push({
            pos: [mx,my],
            currentColor,
            currentShape,
            brushSize
        });
        break;
        case 'circle':
        ctx.beginPath();
        ctx.arc(mx, my, brushSize/2, 0, 2 * Math.PI);
        ctx.fill();
        drawingData.push({
            pos: [mx,my],
            currentColor,
            currentShape,
            brushSize
        });
        break;
        default:
            ctx.beginPath();
            ctx.arc(mx, my, brushSize/2, 0, 2 * Math.PI);
            ctx.fill();
            drawingData.push({
                pos: [mx,my],
                currentColor,
                currentShape,
                brushSize
            });
    }
}

function renderDrawing(data) {
data.forEach((item) => {
    drawCanvas(item.pos[0], item.pos[1], item.currentColor, item.currentShape, item.brushSize);
});
}

main();

export {renderDrawing};