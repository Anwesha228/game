var player;


function setup() {
  createCanvas(displayWidth,displayHeight);
  player = createSprite(200,200,50,50)
}
function preload(){
  bg = loadImage("bg2.gif");
  running = loadAnimation("run.gif","run2.gif");
}

function draw() {
  background(bg);  
  player.addAnimation("run",running);
  drawSprites();
}