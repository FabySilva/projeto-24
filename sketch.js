const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pedra;
var ground;
var borracha;
var ferro;
var martelo;

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    pedra = new Pedra(700,320,70,70);
    ground = new Ground(200,height,2000,20);
    borracha = new Borracha(810,350);
    ferro = new Ferro(810,260,300,PI/2);
    
    martelo = new Martelo(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    pedra.display();
    ground.display();
    borracha.display();
    ferro.display();
    martelo.display();
}