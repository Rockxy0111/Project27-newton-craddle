
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
const Render= Matter.Render;
function preload()
{
	
}
var bobObject1,rope1;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(width/2,height/4,width/7,20);

	bobDiameter=50;
	startBobPositionX=width/2;
	startBobPositionY=height/4+500; 
	bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
	bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
	bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter); 
	bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter); 
	bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });

	rope1=new  Rope(bobObject1.body,roof.body,-bobDiameter*2,0)
	rope2=new  Rope(bobObject2.body,roof.body,-bobDiameter*2,0)
	rope3=new  Rope(bobObject3.body,roof.body,-bobDiameter*2,0)
	rope4=new  Rope(bobObject4.body,roof.body,-bobDiameter*2,0)
	rope5=new  Rope(bobObject5.body,roof.body,-bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
	
  background("grey");
  Engine.update(engine);
  roof.display()
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  drawSprites();
 
}



