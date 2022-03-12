var canvas;
var bg;
var coin,coinimg;
var rock,rockimg;
var girl,girlimg;
var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;
var gameOver, restart;

function preload(){
  bg=loadImage("Road.PNG");
  coinimg=loadImage("coin.PNG");
  rockimg=loadImage("rockcode.jpg");
  girlimg=loadImage("runnergirl.PNG");
}


function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  girl=createSprite(100,150);
  girl.addImage(girlimg);
  girl.scale=0.07;

  coins = new Group();
  rocks = new Group();
  
  gameOver = createSprite(650,150);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.8;
  gameOver.visible = false;  
  
}

function draw(){

  background(bg);  
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
