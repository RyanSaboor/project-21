var ball

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1300, 1200);
var ball_options={
	isStatic:false,
	restitution:0.3
	friction : 0
	density:1.2
}
Matter.Bodies.circle(5,5,5)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}
function keypressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, 3, RIGHT)
}

}


display()
groundObj.display()

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



