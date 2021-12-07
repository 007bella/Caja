var caja;

function setup() {
  caja=createSprite (200,200,200,200);
  createCanvas(400,400);
}

function draw() 
{
  if (keyIsDown(RIGHT_ARROW)) {
    caja.position.x=caja.position.x+5;

    } 
    if (keyIsDown(LEFT_ARROW)) {
      caja.position.x=caja.position.x-5;
  
      }
      if (keyIsDown(DOWN_ARROW)) {
        caja.position.y=caja.position.y+5;
    
        }
        if (keyIsDown(UP_ARROW)) {
          caja.position.y=caja.position.y-5;
      
          }
    background(30);
  drawSprites();

}




