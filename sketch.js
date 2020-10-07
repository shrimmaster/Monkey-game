
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var invisibleGround;

var bananaGroup;

var score;


function preload(){
  
  
  monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  

  
monkey=createSprite(50,300);
monkey.addAnimation("running",monkey_running);
//monkey.velocityX=2;
monkey.scale=0.10;
  
ground=createSprite(300,335,800,10);
ground.velocityX=-8;
 ground.x = ground.width /2;
  
invisibleGround = createSprite(200,335,400,10);
invisibleGround.visible = false;
  

}


function draw() {
background(600);
  
  text("Survival:10 ",200,50);
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
   
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleGround);
  spawnBanana();
  spawnObstacle();
  drawSprites();
  
}

function spawnBanana() {
  
  if (frameCount % 80 === 0) {
    banana=createSprite(400,200);
    banana.addImage(bananaImage);
    banana.scale=0.10;
    //banana.y = Math.round(random(80,120));
    banana.velocityX = -8;
    
    monkey.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
   
  }
}
function spawnObstacle(){

if (frameCount % 300 === 0) {
    obstacle=createSprite(200,315);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.10;
    //obstacle.y = Math.round(random(80,120));
    obstacle.velocityX = -8;
    
    obstacle.depth = monkey.depth;
    obstacle.depth = monkey.depth + 1;
    
    

  }

}

