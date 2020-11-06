var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,survivalTime
var score,ground,obstacleImage2,bananaImage2;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  obstacleImage2 = loadImage("obstacle.png")
  bananaImage2 = loadImage("banana.png")
 
}



function setup() {
  foodGroup = new Group();
  obstacleGroup = new Group();
  createCanvas(480,450);
  monkey = createSprite(50,350,20,20)
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.07
  
  survivalTime = 0;
  
  ground = createSprite(30,377,4800,10)
  score = 0;

  
}


function draw() {
  background('lightblue');
  
      if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
      monkey.velocityY = monkey.velocityY + 0.8;

    survivalTime = survivalTime + Math.round(getFrameRate()/60);   
    
  if(monkey.isTouching(foodGroup)){
    score = score+2
    foodGroup.destroyEach();
  }
    
    var select_stones = Math.round(random(1,2));
  console.log(select_stones)
  
  if (World.frameCount % 80 == 0) {
    if (select_stones == 1) {
      stones2();
    } else {
      stones2();
    }
  
  var select_bananas = Math.round(random(3,4));
  console.log(select_bananas)
  
  if (World.frameCount % 80 == 0) {
    if (select_bananas == 1) {
      bananas();
    } else {
      bananas2();
    }
    
    if(monkey.isTouching(obstacleGroup)){
      gameState = END;
    }
  }
    

  }
  
  monkey.collide(ground);
 
  text("score: "+score,430,30)
  text("survivalTime: "+survivalTime,300,30)
  
 
  drawSprites();
  

  
}

function stones2(){
     
    var stones2 = createSprite(450,365, 20,20)
    stones2.addImage(obstaceImage);
    stones2.lifetime = 150;
    stones2.velocityX = -3
    stones2.scale = 0.08
  obstacleGroup.add(stones2)
}

function stones2(){
    var stones2 = createSprite(450,365, 20,20)
    stones2.addImage(obstacleImage2);
    stones2.lifetime = 150
    stones2.velocityX = -3
    stones2.scale = 0.08
    obstacleGroup.add(stones2)
}

function bananas(){
  var bananas = createSprite(450,365, 20,20)
  bananas.addImage(bananaImage);
  bananas.lifetime = 150
  bananas.velocityX = -3
  bananas.scale = 0.05
  foodGroup.add(bananas)
}

function bananas2(){
  var bananas2 = createSprite(450,300, 20,20)
  bananas2.addImage(bananaImage2);
  bananas2.lifetime = 150
  bananas2.velocityX = -3
  bananas2.scale = 0.05;
  foodGroup.add(bananas2)
}