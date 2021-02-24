
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,699,800,20)
	ground1 = new Ground(780,650,20,100)
	ground2 = new Ground(500,650,20,100)
	PaperBall = new Paper_Ball(143,100,)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  ground1.display()
  ground2.display()
  PaperBall.display()
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(this.body,this.body.position,{x:505,y:616})
	}
}



