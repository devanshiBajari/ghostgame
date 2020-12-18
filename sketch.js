var ghost,ghostImage;
var climber,climberImage;
var door,doorImage
var tower,towerimage;
var windowGroup;

function preload(){
towerimage=loadImage("tower.png");
ghostImage=loadAnimation("ghost-jumping.png","ghost-standing.png");
climberImage=loadImage("climber.png");
doorImage=loadImage("door.png");
}

function setup(){
createCanvas(500,800);

tower=createSprite(200,400);
tower.addImage("towerimage",towerimage);
tower.velocityY = 7;

ghost=createSprite(200,350);
ghost.addAnimation("ghostImage",ghostImage);

windowGroup = new Group();

}



function draw(){
  background("black");

  ghost.scale=0.4;
 
  ghost.velocityY = 10;

if(tower.y > 400){
    tower.y = 0}

if(keyDown(UP_ARROW)){ 
  ghost.velocityY = -10;
}

if(keyDown(DOWN_ARROW)){
  ghost.velocityY = 10;
}

/*if(keyDown(RIGHT_ARROW)){
  ghost.velocityX = 7;
 }*/

if(keyDown(LEFT_ARROW)){
  ghost.velocityX = -7
 }
else {
  ghost.velocityX = 0;
}
 
/*if(ghost.isTouching (climber)){
  ghost.velocityY=0;
}*/
 
if (ghost.y < 30){
  text ("GAME OVER",200,400);
  text.depth=ghost.depth+1;

}

spawnWindow();
drawSprites();
}

function keyPressed(){
  if (keyCode == 26){
    console.log ("have fun!");
  }
}


function spawnWindow(){
  
  if ( frameCount % 100 === 0 ){
    door = createSprite(random(100,400),random(0,600));
    door.addImage(doorImage);
    climber = createSprite(door.x,door.y+50);
    climber.addImage(climberImage);
  }
  
  if ( frameCount % 150 === 0 ){
    windowGroup.add(climber);
    windowGroup.add(door);
    windowGroup.destroyEach();

    door.lifetime = 150;
    climber.lifetime=150;
  }
}
