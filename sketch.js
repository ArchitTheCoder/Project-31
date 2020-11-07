const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var divisions = [];
var plinkos = [];
var particles = [];

var divisionHeight = 300;



function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, height, 480, 20)


  //Plinkos
  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75, 20))
  }
  for (var j = 15; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 175, 20))
  }
  for (var j = -10; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275, 20))
  }
  for (var j = -35; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 375, 20))
  }


  //Divisions
  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }

}

function draw() {
  background(0);
  Engine.update(engine);



  //Particles
  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10))
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }

  //Div
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //Plink
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  ground.display();
}

