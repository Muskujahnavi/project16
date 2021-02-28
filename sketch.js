var monkey,monkey_running;
var banana,bananaImage,obstacle,obstacleImage;
var ground;
var FoodGroup,obstacleGroup,bananasGroup,stonesGroup;
var score,textSize;
var gameState;
var END;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,480)
  
  bananasGroup=new Group();
  stonesGroup=new Group();
  
  //creating mokey
  monkey=createSprite(80,400,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  //creating ground
  ground=createSprite(400,420,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;  

score = 0;
 textSize(20)
text("Score: "+score,380,50); 
  
}

function draw() {
  
  background('Aqua');
  //displaying score
  text("Score: "+ score, 500,50);
  score = score + Math.round(getFrameRate()/120);
   if(ground.x<200){
  ground.x=ground.width/2;  
     
  }
  
  bananas()
  stone()
  if(keyDown("space")&& monkey.y>=299)  {
    
    monkey.velocityY=-12;
    
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  if(bananasGroup.isTouching(monkey)){
    
    score=score+2;
  }
  

  if(stonesGroup.isTouching(monkey)){
    
     gameState=END;
    
    monkey.velocityX=0;
    ground.velocity=0;
      
    stonesGroup.setLifetimeEach(-1);
    
    stonesGroup.setVelocityXEach(0);
   
    score=score+2;
  }

  drawSprites();
 
}
  
 
  



function bananas() {
  
  if(frameCount % 200 === 0){
    var banana=createSprite(580,200,50,50);
    banana.y=Math.round(random(180,200));
    banana.velocityX=-6;
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.lifetime=300   ;
    bananasGroup.add(banana);
  }
  
}


function stone() {
  
  if(frameCount%300 === 0){
    var stone=createSprite(580,390,50,50);
    stone.velocityX=-4;
    stone.addImage(stoneImage)
    stone.scale=0.15;
    stone.lifetime=300;
    stonesGroup.add(stone);
  }
  
}


