
var backgroundIMG;
var ground;

var playerBall, playerIMG;

function preload(){
  backgroundIMG = loadImage("Images/Background.png");
  playerIMG = loadImage("Images/redball.png");

}

function setup() {
  createCanvas(displayWidth*4,displayHeight*2);

  ground = createSprite(displayWidth/2, displayHeight/2, 600, 50);
  ground.addImage("ground",backgroundIMG);
  ground.scale = 5;

  ground.y = ground.height/2;
  ground.velocityY = 5;

  ball = createSprite(ground.x, ground.y, 10,10);
  ball.x = ground.x;
  ball.y = ground.y;
  ground.addImage("playerBall",playerIMG);

}

function draw() {
  background(255,255,255);  

  

  drawSprites();
}