var tom, tom_image,tom_walk,tom_sit;
var jerry, jerry_cheese,jerry_animation,jerry_stand;
var garden ,garden_image;
function preload() {
    //load the images here
  tom_image = loadImage("images/cat1.png");
  tom_walk = loadAnimation("images/cat2.png","images/cat3.png");
  tom_sit = loadImage("images/cat4.png");
  jerry_cheese = loadImage("images/mouse1.png");
  jerry_animation = loadAnimation("images/mouse2.png","images/mouse3.png");
  jerry_stand = loadImage("images/mouse4.png");
  garden_image = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400,10,10);
    garden.addImage(garden_image);
    garden.scale = 0.9;

    tom = createSprite(800,580,10,10);
    tom.addImage(tom_image);
    tom.scale = 0.1;

    jerry = createSprite(200,580,10,10);
    jerry.addImage(jerry_cheese);
    jerry.scale = 0.1;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
      if(tom.x - jerry.x<(tom.width - jerry.width)/2){
        jerry.addImage("stand",jerry_stand);
        jerry.changeImage("stand");

        tom.addImage("sit",tom_sit);
        tom.changeImage("sit");
        tom.velocityX = 0;
        tom.x = 250;
      }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

   if(keyCode === LEFT_ARROW){
    jerry.addAnimation("moving",jerry_animation);
    jerry.changeAnimation("moving");
    jerry.frameDelay = 25;

    tom.addAnimation("walk", tom_walk);
    tom.changeAnimation("walk");
    tom.velocityX = -3;
   }
}
