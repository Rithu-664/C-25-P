
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper;
var side1,side2,side3;

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground=new Ground(600,380,1200,10);
   paper=new Paper(250,370,20);
   side1=new Dustbin(880,370,100,10);
   side2=new Dustbin(924,325,10,100);
   side3=new Dustbin(825,325,10,100);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  drawSprites();

  fill("white");
  text(mouseX+" , "+mouseY,mouseX,mouseY);
 
  ground.display();
  paper.display();
  side1.display();
  side2.display();
  side3.display();
    keyPressed();
   console.log(paper.body.position);
   Engine.update(engine);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-45});
	}
}



