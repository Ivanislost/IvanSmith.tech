// let hx = require("/node_modules/hexagon-js/dist/hexagon.js")

let pointArray = [];
var xAmplitude = 40;
var yAmplitude = 40;
var xSpeed;
var ySpeed;

function displacement(x, y){
  // console.log(`I am a point with x=${x}, y=${y}`);
}

function setup(){
  let cnv = createCanvas(800,800);
  cnv.parent(document.getElementById('sketch'))
  for (var xNumIn = 1; xNumIn <= 15; xNumIn++) {
  	for (var yNumIn = 1; yNumIn <= 15; yNumIn++) {
  		pointArray.push(new ppoint(xNumIn, yNumIn, displacement));

  	}
  }
  noStroke();

  xSpeed = frameCount/40;
  ySpeed = frameCount/40;
}



function draw() {
  background('#FFFAFA');
  // referencePointShow();
  animateField();
}

function animateField(){

  pointArray.forEach(function(element){
    fill('#141414');
    element.display();
  })
}

function referencePointShow(){
  pointArray.forEach(function(element){
    fill(color('red'));
    ellipse(element.x, element.y, 5, 5);

  })
}


//point class
class ppoint{
	constructor(xNumIn, yNumIn, funkyIn){
		this.xNum = xNumIn;
		this.yNum = yNumIn;
		this.x = xNumIn * 50;
		this.y = yNumIn * 50;
    this.funky = funkyIn;
    // funkyIn(this.x, this.y);
	}

	display() {
    // fill(120, 200+4*this.xDisplace(), 200-4*this.yDisplace());
		//ellipse(this.x + this.pXChange(), this.y+ this.pYChange(), 5, 5);
		ellipse(this.x + this.xDisplace(), this.y + this.yDisplace(), 15, 15);
	}

  xSpeed(){
    return frameCount/(sliderSpdX*50);
  }
  ySpeed(){
    return frameCount/(sliderSpdY*50);
  }

  xDisplace(){
    return this.xAmplitude()*sin(this.xSpeed() + 2*sliderXDispXTime*this.xNum + 2*sliderXDispYTime*this.yNum);
  }
  yDisplace(){
    return this.yAmplitude()*sin(this.ySpeed() + 2*sliderYDispXTime*this.xNum + 2*sliderYDispYTime*this.yNum);
  }

  xAmplitude(){
    return sliderAmpX*70*sin(this.xNum);
  }
  yAmplitude(){
    return sliderAmpY*70*sin(this.yNum);
  }

  amplitude(){

  }
}

let sliderSpdX = 1;
let sliderSpdY = 1;
let sliderAmpX = 0;
let sliderAmpY = 0;
let sliderXDispXTime = 0;
let sliderXDispYTime = 0;
let sliderYDispXTime = 0;
let sliderYDispYTime = 0;


document.addEventListener("DOMContentLoaded", main());
function main(){
  "use strict";
  setSliders();
}

function setSliders(){
  let sliderObj = {}
  let sliderDom = document.querySelectorAll(".hx-slider")
  sliderDom.forEach(function(element, index){
    sliderObj[`slider${index}`] = new hx.Slider(element, {"min": -1, "max": 1});
  })

  sliderObj.slider0.on("change", function(value){
    sliderSpdX = value;
  })
  sliderObj.slider1.on("change", function(value){
    sliderSpdY = value;
  })
  sliderObj.slider2.on("change", function(value){
    sliderAmpX = value;
  })
  sliderObj.slider3.on("change", function(value){
    sliderAmpY = value;
  })
  sliderObj.slider4.on("change", function(value){
    sliderXDispXTime = value;
  })
  sliderObj.slider5.on("change", function(value){
    sliderXDispYTime = value;
  })
  sliderObj.slider6.on("change", function(value){
    sliderYDispXTime = value;
  })
  sliderObj.slider7.on("change", function(value){
    sliderYDispYTime = value;
  })
}
