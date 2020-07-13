const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var ground, ground2;
var Ball, Chain;
var backgroundImg;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);

  ground = new Ground(400, 380, 800, 20);
  ground2 = new Ground(600, 200, 200, 20);

  box1 = new box(400, 345, 50, 50);
  box2 = new box(450, 345, 50, 50);
  box3 = new box(500, 345, 50, 50);
  box4 = new box(425, 295, 50, 50);
  box5 = new box(475, 295, 50, 50);
  box6 = new box(450, 245, 50, 50);
  box7 = new box(575, 180, 50, 50);
  box8 = new box(525, 180, 50, 50);
  box9 = new box(550, 130, 50, 50);

  Ball = new ball(200, 200, 30);

  Chain = new chain(Ball.body,{x: 200, y: 150});
}

function draw() {
  if(backgroundImg)
  background("backgroundImg");

  Engine.update(engine);
  
  ground.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  Ball.display();
  Chain.display();




  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(Ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  Chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Chain.attach(Ball.body);
  }
}

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
  var responseJSON = await response.json();
  var dt = responseJSON.datetime;
  var hour = dt.slice(11, 13);
  if(hour >= 06 && hour <= 18){
  bg = "sprites/bg.png";
  }
  else{
      bg = "sprites/bg2.png";    
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
  }
