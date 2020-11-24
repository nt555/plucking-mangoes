
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);

	
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Tree = new tree(1050,580,40,40);
	ground = new Ground(width/2,600,width,20 , {isStatic:true});
	stone = new Stone(400,500,60,20);

	mango1=new Mango(1100,100,30);
	mango2=new Mango(1170,130,30);
	  mango3=new Mango(1010,140,30);
	  mango4=new Mango(1000,70,30);
	  mango5=new Mango(1100,70,30);
	  mango6=new Mango(1000,230,30);
	  mango7=new Mango(900,230,40);
	  mango8=new Mango(1140,150,40);
	  mango9=new Mango(1100,230,40);
	  mango10=new Mango(1200,200,40);
	  mango11=new Mango(1120,50,40);
	  mango12=new Mango(900,160,40);
  

	World.add(world, ground);
	
	launcherObject=new launcher(stone.body,{x:235,y:420})
                                                                                                                    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  image(boy,200,340,200,300);

  Tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  launcherObject.display();


  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);




  drawSprites();
 
}


function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  launcherObject.attach(stone.body);
	}
  }


  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }