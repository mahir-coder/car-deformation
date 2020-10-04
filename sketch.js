var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  speed = random(50,310)
  weight = random(50, 100)

  invi = createSprite(1465, 200,10, height/2)
  invi.visible=false
 
  car = createSprite(50, 200, 20, 15)
  car.velocityX=(speed)


  wall = createSprite(1500, 200, 60, height/2)
  wall.shapeColor=(80,80,80)
  
  

}

function draw() {
  background(0,0,0);  
  drawSprites();
  
 car.collide(wall)
  if(invi.x-car.x<(invi.width+car.width)/2){
    
    
    
    var deformation=0.5 * weight * speed * speed/22500;
    if(deformation>=180){
    
      car.shapeColor=color(255, 0, 0)
  } 

   if(deformation>=100&& deformation<180){
    
     car.shapeColor=color(230, 230, 0)
   }

    if(deformation<100){
    
     car.shapeColor=color(0, 255, 0)
    }
    
    
  }
}