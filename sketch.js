var movingRect;
var fixedRect;
var ob1,ob2;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 80);
  fixedRect=createSprite(400, 200, 30, 60);

  ob1=createSprite(100, 300, 50, 80);
  ob2=createSprite(700, 300, 30, 60);

  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";

  ob1.shapeColor="blue";
  ob2.shapeColor="blue";

  ob1.velocityX=3;
  ob2.velocityX=-3;

  movingRect.debug=true;
  fixedRect.debug=true;
}

function draw() {
  background(255,255,255);
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 && fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

  var diff = movingRect.height/2+fixedRect.height/2;
  console.log("diff: "+diff);
  console.log("diff1 "+(movingRect.y-fixedRect.y)+"  diff2: "+(fixedRect.y-movingRect.y))

  if(ob1.x-ob2.x < ob1.width/2+ob2.width/2 && ob2.x-ob1.x < ob2.width/2+ob1.width/2){
    ob1.velocityX = -(ob1.velocityX);
    ob2.velocityX= -(ob2.velocityX);
  }

  drawSprites();
}