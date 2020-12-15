var wall, thickness; 
var bullet, speed, weight;

function setup(){
 createCanvas(1200,200);
thickness =random(22,83);

wall= createSprite(1200,200, thickness,height/2);
speed=random(223,321);
weight=random(30,52);
} 

function hasCollided(Lbullet, Lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallleftEdge=lwall.x;
  if (bulletRightEdge>=wallleftEdge)
{
return true 
}
return false;

if(hasCollided(bullet, wall))
{
  bullet.veloxityX=0;
  var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);
  

  if(damage>10);
}
wall.shapecolor=color(255,0,0);
{
if(damage<10);
}
wall.shapecolor=color(0,255,0);

drawsprites();
}
