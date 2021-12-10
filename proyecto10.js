var ground, boat;
var groundImage, boatimage;
function preload(){
    groundImage=loadAnimation ("ship-1.png,ship-2.png");
    boatimage=loadAnimation("sea.png");
}
function setup(){
    createCanvas(600,200);
    ground = createSprite(300,200,600,10);
    ground.velocityX=-5;
    ground.x=ground.width/2;
    ground.addImage("ground",groundImage);
    boat.addAnimation("moving",boatimage);
    edges = createEdgeSprites();
}
function draw(){
    background("white");
    if(ground.x<100){
        ground.x=ground.width/2;
      }
    drawSprites();
}