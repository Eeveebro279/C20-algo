var f, m, edges

function setup() {
  createCanvas(800,400);
f = createSprite(200, 200, 50, 80)
f.shapeColor = ("lime");
f.velocityY = 5;
f.velocityX = -5;
m = createSprite(40, 200, 80, 30)
m.shapeColor = ("cyan");
m.velocityY = -5;
}

function draw() {
  background(0);  

m.x = World.mouseX
m.y = World.mouseY

edges = createEdgeSprites();

f.bounceOff(edges);

if(m.x - f.x < f.width / 2 + m.width / 2
  && f.x - m.x < f.width / 2 + m.width / 2){

    m.velocityX = m.velocityX * (-1);
    f.velocityX = f.velocityX * (-1);

  }

  if(m.y - f.y < f.height / 2 + m.height / 2
    && f.y - m.y < f.height / 2 + m.height / 2){
  
      m.velocityY = m.velocityY * (-1);
      f.velocityY = f.velocityY * (-1);
  
    }

/*if(m.x - f.x < f.width / 2 + m.width / 2
  && f.x - m.x < f.width / 2 + m.width / 2
  && m.y - f.y < f.height / 2 + m.height / 2
  && f.y - m.y < f.height / 2 + m.height / 2 ){

    m.shapeColor = ("yellow");
    f.shapeColor = ("yellow");

  }
  else {

    f.shapeColor = ("lime");
    m.shapeColor = ("cyan");

  }
*/

  drawSprites();
}