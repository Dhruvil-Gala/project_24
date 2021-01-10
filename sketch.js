
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var log1,log2,log3;
var ball;

function setup() {
	createCanvas(1000, 450);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(500,445,1000,10);

	log1=new Box(800,435,150,10);
	log2=new Box(720,400,10,80);
	log3=new Box(880,400,10,80)
	
	ball=new Ball(100,100,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  log1.display();
  log2.display();
  log3.display();

  ball.display();
  //keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:205,y:-105});
	}
}


