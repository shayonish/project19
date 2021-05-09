var monkey,monkeyImage;
var backGround1,backgroundImage;
var invisibleGround;
var banana,bananaImage,bananaGroup;
var obstacle,obstacleGroup;
var score = 0 ;
var gamestate = PLAY;
var PLAY = 1;
var END = 0;

function preload()
{
  monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_09.png","Monkey_06.png","Monkey_07.png","Monkey_010.png","Monkey_08.png");

  bananaImage = loadImage("banana.png");
  
  backgroundImage = loadImage("jungle.jpg");
}
function setup() {
createCanvas(400, 400);
background(5);

  stroke("white");
  fill("white");
text("score :" + score ,500,50,textSize(20));
  
invisibleGround = createSprite(200,100,400,2)
invisibleGround.visible = false;
invisibleGround.collide(monkey);
  
monkey = createSprite(200,200,20,20);
monkey.addAnimation(monkeyImage,"monkey1");
monkey.scale = 0.2; 

backGround1 = createSprite(200,200,400,400);
backGround1.addImage("background1",backgroundImage);
backGround1.velocityX = -3;

 
  drawSprites();
}

function draw() {
  background(220);
  
if(bananaGroup.isTouching(monkey))
{
 score = score + 2
 banana.destroy();

}
 
  if(obstacleGroup.isTouching(monkey))
  {
   monkey.scale = 0.2;
  
  }
  
  switch (score)
  {
    case 10: monkey.scale = 0.12;
        break;
    case 20: monkey.scale = 0.14;
        break;
    case 30: monkey.scale = 0.16;
        break;
    case 40: monkey.scale = 0.18;
        break;
    default:break;
        
  }
}