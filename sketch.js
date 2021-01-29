
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var division1;
var plinko1;
var particle1;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(0, 760, 960, 20);

	division1 = new division(80, 650, 20, 200);
	division2 = new division(150, 650, 20, 200);
	division3 = new division(220, 650, 20, 200);
	division4 = new division(290, 650, 20, 200);
	division5 = new division(360, 650, 20, 200);
	division6 = new division(430, 650, 20, 200);

	plinko1 = new Plinko(80, 350, 20, 20);
	plinko2 = new Plinko(150, 350, 20, 20);
	plinko3 = new Plinko(220, 350, 20, 20);
	plinko4 = new Plinko(290, 350, 20, 20);
	plinko5 = new Plinko(360, 350, 20, 20);
	plinko6 = new Plinko(430, 350, 20, 20);

	plinko7 = new Plinko(80, 300, 20, 20);
	plinko8 = new Plinko(150, 300, 20, 20);
	plinko9 = new Plinko(220, 300, 20, 20);
	plinko10 = new Plinko(290, 300, 20, 20);
	plinko11 = new Plinko(360, 300, 20, 20);
	plinko12 = new Plinko(430, 300, 20, 20);

	plinko13 = new Plinko(80, 400, 20, 20);
	plinko14 = new Plinko(150, 400, 20, 20);
	plinko15 = new Plinko(220, 400, 20, 20);
	plinko16 = new Plinko(290, 400, 20, 20);
	plinko17 = new Plinko(360, 400, 20, 20);
	plinko18 = new Plinko(430, 400, 20, 20);

	plinko19 = new Plinko(80, 450, 20, 20);
	plinko20 = new Plinko(150, 450, 20, 20);
	plinko21 = new Plinko(220, 450, 20, 20);
	plinko22 = new Plinko(290, 450, 20, 20);
	plinko23 = new Plinko(360, 450, 20, 20);
	plinko24 = new Plinko(430, 450, 20, 20);

	particle1 = new Particle(80, 0, 20, 20);


	





	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  particle1.display();
  particleloop();
  drawSprites();
 
}

function particleloop() {

   if(frameCount%60==0){

      Particle.push(new Particle(random(width/2-10, width/2+10), 10, 10));

   }

}





