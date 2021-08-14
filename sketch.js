var space;
var spacecraftimage;
var spacecraft;
var issimage;
var iss;
var hasDocked = false;
var spacecraftimage1,spacecraftimage2,spacecraftimage3,spacecraftimage4;

function preload(){

space=loadImage("/images/spacebg.jpg");

spacecraftimage=loadImage("/images/spacecraft1.png")

issimage = loadImage("/images/iss.png")

spacecraftimage2 = loadImage("/images/spacecraft2.png")
spacecraftimage3 = loadImage("/images/spacecraft3.png")
spacecraftimage4 = loadImage("/images/spacecraft4.png")

}

function setup() {
  createCanvas(600, 350);

  spacecraft = createSprite(285,240)
  spacecraft.AddImage(spacecraftimage)

  iss = createSprite(285,240)
  iss.AddImage(issimage)
  iss.scale = 0.25;
}

function draw() {
  background(space);  
  spacecraft.AddImage(spacecraftimage)

  if(!hasDocked) {

    spacecraft.x = spacecraft.x + random(-1,1);

   if(keyDown("UP_ARROW")) {
     spacecraft.addImage(spacecraftimage2)
     spacecraft.y = spacecraft.y - 2
   }

   if(keyDown("DOWN_ARROW")) {
     spacecraft.addImage(spacecraftimage2)
     spacecraft.y = spacecraft.y + 0
   }

   if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(spacecraftimage4);
    spacecraft.x = spacecraft.x - 1;
   }
  
   if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(spacecraftimage3);
    spacecraft.x = spacecraft.x + 1;
   } 
  }

  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;

    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }

  drawSprites();
}