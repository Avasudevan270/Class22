const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myengine, myworld
var ground, ball, Rect

function setup(){
  createCanvas(400,400)
myengine = Engine.create();
myworld = myengine.world

var groundOptions = {
  isStatic: true
}

ground = Bodies.rectangle(200, 380, 400, 10, groundOptions)
World.add(myworld,ground)

var ballOptions= {
  restitution: 1.0
}




ball= Bodies.circle(100,100,20, ballOptions)
World.add(myworld,ball)

var RectOptions={
  restitution:2.0, 
  isStatic: true

}

Rect = Bodies.rectangle(300, 100, 50,50, RectOptions)
World.add(myworld,Rect)

}
function draw(){
 background(0)
 Engine.update(myengine)
 fill("red")
 rectMode(CENTER)
 rect(ground.position.x, ground.position.y,400, 10)
ellipseMode(RADIUS)
ellipse(ball.position.x, ball.position.y, 20,20)

rect(Rect.position.x, Rect.position.y, 50, 50)



  
}




