
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(500,180,300,50)
	bob1=new  Bob(400,500,50)
	bob2=new  Bob(450,500,50)
	bob3=new  Bob(500,500,50)
	bob4=new  Bob(550,500,50)
	bob5=new  Bob(600,500,50)

  rope1=new  Rope(bob1.body,{x:400,y:180})
  rope2=new  Rope(bob2.body,{x:450,y:180})
  rope3=new  Rope(bob3.body,{x:500,y:180})
  rope4=new  Rope(bob4.body,{x:550,y:180})
  rope5=new  Rope(bob5.body,{x:600,y:180})




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display()
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
  keyPressed()
}
function keyPressed() {
	if (keyDown(UP_ARROW)) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:-20});
	}
	
	}
	


