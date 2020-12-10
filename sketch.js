var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(100,100,30,30);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="orange";
car.svelocityX=speed;
  speed=randam(55,90);
  weight=random(400,1500);
}

function draw() {
  background("black");  
  drawSprites();

  var deformation = 0.5 * weight * speed * speed / 22500;

  if(deformation<100){
    car.shapeColor="green";
    Text("Good for Passengers", 800,200);
    car.velocityX=0
  }
  if (deformation>100 && deformation<180){
    car.shapeColor="yellow";
    Text("Average for Passengers", 800,200);
    car.velocityX=0 ;
  }
  if(deformation>180){
    car.shapeColor="red";
    Text("Lethal for Passengers", 800,200);
    car.velocityX=0
  }
}