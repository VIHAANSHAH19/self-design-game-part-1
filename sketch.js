var gameState=0,playerCount=0;
var game,player,form;
var database,ob1,ob2,pl1,pl2,ground;

function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  database=firebase.database();
  
  
  game=new Game()
  game.getState()
  game.start()
}

function draw() {
  background("black")
  pl1.collide(ground)
  pl1.collide(ob1)
  pl1.collide(ob2)
  pl1.velocityY=pl1.velocityY+0.5
  pl2.collide(ground)
  pl2.collide(ob1)
  pl2.collide(ob2)
  pl2.velocityY=pl2.velocityY+0.5

  drawSprites();
}

function display(){
  
}