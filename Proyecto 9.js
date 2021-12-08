function setup() {
    createCanvas(400,400);
    background(51);
    box = createSprite(200,200,30,30);
  
  }
  
  function draw() 
  {
  
    // escribir el código para cambiar el color del fondo 
    // rojo cuando se presiona RIGHT_ARROW (tecla de flecha derecha)
    
    
  
    if (keyIsDown(LEFT_ARROW)) 
    {
      background("black");
      
    }
   
      if (keyIsDown(UP_ARROW)) 
    {
      background("blue");
     
    }
  
    if (keyIsDown(DOWN_ARROW)) 
    {
      background("purple");
    }
    if (keyIsDown(RIGHT_ARROW)) 
    {
      background("green");
    }
  
    
    drawSprites();
  }
  