const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var fruit;
function preload(){
  backgroundImg = loadImage("background.png");

}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  
  solo = new Solo();
  
 
}
function draw() {
  background(backgroundImg); 
  fill ("white")
  textSize(20)
  text(mouseX + ',' + mouseY, 10, 25);
  
  solo.display();
 

  imageMode(CENTER)
  
 
}
