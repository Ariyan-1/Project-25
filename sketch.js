var dustbinIMG, dustbin,paper,paperIMG;
var paperObject,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER)
  
  engine = Engine.create();
  world = engine.world;

	paper = new Paper(250,450,100);

  ground=new Ground(width/2,670,1200,20);

  dustbin=new Dustbin(1350,600);
	
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1200,
      height: 700,
      wireframes: false
    }
  });

	//paper = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, paper);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

  Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin.display();
  };

 function keyPressed() {
   if (keyCode === UP_ARROW) {
     Matter.Body.applyForce(paper.body,paper.body.position,{x:276,y:-281});

   }
 }