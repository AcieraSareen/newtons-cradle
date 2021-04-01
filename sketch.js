const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,roof,rope;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(400,550,70);
	rope=new Rope (bob1.body,roof.body);
	
	roof=new Roof (width/2,170,width,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
background("black");

  bob1.display();
  roof.display();
  rope.display();
  
  
  drawSprites();
 
}



