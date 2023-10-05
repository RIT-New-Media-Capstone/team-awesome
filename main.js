let myCanvas = document.querySelector("#myCanvas");

let ctx = myCanvas.getContext("2d");

ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, 500, 400);

function setColor(element) //set the color of the pen tool
{
    console.log(element.style.backgroundColor);

    document.querySelector("body").style.backgroundColor = element.style.backgroundColor;
}