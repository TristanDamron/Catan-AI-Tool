//victory point variable
var victoryPoints = 0;

//tool state
var state;

//image variables for roads
const redRoad1 = new Image();
const redRoad2 = new Image();
const whiteRoad1 = new Image();
const whiteRoad2 = new Image();
const orangeRoad1 = new Image();
const orangeRoad2 = new Image();
const blueRoad1 = new Image();
const blueRoad2 = new Image();
const pointImg = new Image();

//assign variables
redRoad1.src = "img/red-road-1.png";
redRoad2.src = "img/red-road-2.png";
whiteRoad1.src = "img/white-road-1.png";
whiteRoad2.src = "img/white-road-2.png";
orangeRoad1.src = "img/orange-road-1.png";
orangeRoad2.src = "img/orange-road-2.png";
blueRoad1.src = "img/blue-road-1.png";
blueRoad2.src = "img/blue-road-2.png";
pointImg.src = "img/point.png";

//check to see if victory points have updated
window.setInterval(function() {
    document.getElementById("victory points").innerText = "Victory Points : " + victoryPoints;
}, 100);

//variables for images on the toolbar
var pointer = document.getElementById("pointer");
var pencil = document.getElementById("pencil");
var eraser = document.getElementById("eraser");
var text = document.getElementById("text");

//body variable
var body = document.getElementsByTagName("body")[0];

//layer
var layer = document.getElementById("layer");
var layerCtx = layer.getContext("2d");

//main canvas
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

pointer.addEventListener("click", function() {
    body.style.cursor = "url(img/pointer.png), false";
    state = "pointer";
}, false);

pencil.addEventListener("click", function() {
    body.style.cursor = "";
    state = "pencil";
}, false);

eraser.addEventListener("click", function() {
    body.style.cursor = "";
    state = "eraser";
});

text.addEventListener("click", function() {
    body.style.cursor = "url(img/text.png), false";
    state = "text";
}, false);

//import map module
const map = require("./js/map.js");

//toolbar and resource bar images
document.body.onload = function() {
    ctx.drawImage(redRoad1, 0, 50);
    ctx.drawImage(redRoad2, 32, 50);
    ctx.drawImage(whiteRoad1, 64, 50);
    ctx.drawImage(whiteRoad2, 96, 50);
    ctx.drawImage(orangeRoad1, 128, 50);
    ctx.drawImage(orangeRoad2, 160, 50);
    ctx.drawImage(blueRoad1, 192, 50);
    ctx.drawImage(blueRoad2, 224, 50);
    
    //draw map
    map.draw(ctx);

    //draw points on map
    map.renderPoints(ctx, pointImg, 420, 80);

};

//hand of cards
ctx.fillStyle = "#ffff99";
ctx.fillRect(0, 500, 800, 100);

//tool events
layer.addEventListener("mousedown", function(event) {
    if (state == "pencil") {
	layerCtx.beginPath();
	layerCtx.moveTo(event.pageX - layer.offsetLeft, event.pageY - layer.offsetTop);
	layer.addEventListener("mousemove", draw, false);
    } else if (state == "eraser") {
	layerCtx.clearRect(0, 0, layer.width, layer.height);
    } else if (state == "text") {

    } else if (state == "pointer") {

    } else {

    }
}, false);

layer.addEventListener("mouseup", function(event) {
    if (state == "pencil") {
	layer.removeEventListener("mousemove", draw, false);
    }

}, false);

function draw() {
    var mouseX = event.pageX - layer.offsetLeft;
    var mouseY = event.pageY - layer.offsetTop;

    console.log(mouseX + " " + mouseY);
    layerCtx.lineTo(mouseX, mouseY);
    layerCtx.strokeStyle = "#000";
    layerCtx.stroke();
}
