const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var base;
var block8,block9,block10,block11,block12,block13,block14,block15,block16;
var polygon;
var slingshot;
var poly;
var polyImg;

function preload(){
    polyImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    base = new Ground (385,266,170,20);

    block8 = new Box (330,235,30,40);
    block9 = new Box (360,235,30,40);
    block10 = new Box (390,235,30,40);
    block11 = new Box (420,235,30,40);
    block12 = new Box (450,235,30,40);

    block13 = new Box (360,195,30,40);
    block14 = new Box (390,195,30,40);
    block15 = new Box (420,195,30,40);

    block16 = new Box (390,155,30,40);

    //polygon = new Box(300,200,30,30);
    poly = Bodies.circle(50,200,20);
    World.add(world,poly);

    slingshot = new SlingShot(poly,{x:100, y:200});

    
}

function draw(){
    Engine.update(engine);

    ground.display(); 
    base.display();   

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    //polygon.displayPolygon();
    imageMode(CENTER)
    image(polyImg,poly.position.x,poly.position.y,40,40);

    slingshot.display();
}


function mouseDragged(){
    Matter.Body.setPosition(this.poly, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.poly);
    }
}