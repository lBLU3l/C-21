var bullet, wall;
var speed, weight;
var thickness, bulletRightEdge, wallLeftEdge;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 70, 20);
  wall = createSprite (1200,200,thickness,200);
  wall.shapeColor = color (80,80,80);
  bullet.shapeColor = color ("white");
  speed = random(223,321)
  weight = random (30,42);
  thickness = random (22,83);
  bullet.velocityX = 9;
}

function draw() {
  background("black");  
  drawSprites();
  if (wall.x-car.x < (car.width+wall.width/2)){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if (deformation > 180) {
      car.shapeColor = color(255,0,0);
    }
    if (deformation < 180 && deformation > 100){
      car.shapeColor = color(230,230,0);
    }
    if (deformation < 100){
      car.shapeColor = color(0,255,0);
    }
  }

  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if (damage>10){
      wall.shapeColor = color (255,0,0);
    }
    if (damage<10){
      bullet.shapeColor = color (0,255,0);
    }
  }
}

function hasCollided(bullet, wall){
    bulletRightEdge = bullet.x + bullet.width;
    wallLeftEdge = wall.x;
    if (bulletRightEdge>=wallLeftEdge){
      return true
    }
    return false;
}