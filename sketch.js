var retFixo, retMovendo;

function setup() {
  createCanvas(1200,800);
  retFixo = createSprite(600, 400, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(400,200,80,30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;

  obj1 = createSprite(500, 400, 80, 70);
  obj1.shapeColor = "green";
  
}

function draw() {
  background(0,0,0);  
  retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY;

  if(isTouchingJoaquim()){
    retMovendo.shapeColor = "red";
    retFixo.shapeColor = "red";
  }else{
    retMovendo.shapeColor = "green";
    retFixo.shapeColor = "green";
  }
  

  drawSprites();
}

function isTouchingJoaquim(obj1, obj2){
  if (retMovendo.x - retFixo.x < retFixo.width/2 + retMovendo.width/2
  && retFixo.x - retMovendo.x < retFixo.width/2 + retMovendo.width/2
  && retMovendo.y - retFixo.y < retFixo.height/2 + retMovendo.height/2
  && retFixo.y - retMovendo.y < retFixo.height/2 + retMovendo.height/2) {
 
  return true;
}
else {
  
  return false;
}
}