/*
   Notes:
     If you record all of the x and y start and end coordinates..
     will need to know if goes over other dots
     
 */
var c = document.getElementById("gameboard");
var ctx = c.getContext("2d");
let firstClickX = 0;
let firstClickY = 0;
function drawLine(ctx, begin, end, stroke = 'black', width = 1) {
    if (stroke) {
        ctx.strokeStyle = stroke;
    }
    if (width) {
        ctx.lineWidth = width;
    }
    ctx.beginPath();
    ctx.moveTo(...begin);
    ctx.lineTo(...end);
    ctx.stroke();
}
function getMousePositionOne(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("Coordinate x: " + x, "Coordinate y: " + y);
    firstClickX = x;
    firstClickY = y;
}
function getMousePositionTwo(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("Coordinate x: " + x, "Coordinate y: " + y);
    drawLine(ctx, [firstClickX, firstClickY], [x, y], 'red', 3);
}

c.addEventListener("mousedown", function (e) {
    getMousePositionOne(c, e);
});
c.addEventListener("mouseup", function (e) {
    getMousePositionTwo(c, e);
    firstClickX = 0;
    firstClickY = 0;
});

