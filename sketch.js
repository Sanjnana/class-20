var moving,fixed;

function setup() {
  createCanvas(800,400);
 moving = createSprite(400, 400, 20, 50);
 moving.shapeColor="green";
 fixed = createSprite(400,300,50,30);
 fixed.shapeColor="green";

}
 
function draw() {
  background(255,255,255);
  moving.y=mouseY;
moving.x=mouseX;
moving.debug=true;
fixed.debug=true;  

if (fixed.x - moving.x < fixed.width/2 + moving.width/2 ){
  moving.shapeColor ="red";
  fixed.shapeColor ="red";
}
else{
  moving.shapeColor="green";
  fixed.shapeColor="green";
}
  drawSprites();
}