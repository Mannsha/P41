var drops = [];
var engine, world;
var umbrellas;
var maxDrops = 100;
var drop;
var ground;
var thunder;
var t1, t2, t3, t4;

const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

function preload() {
  t1 = loadImage("thunderbolt/1.png");
  t2 = loadImage("thunderbolt/2.png");
  t3 = loadImage("thunderbolt/3.png");
  t4 = loadImage("thunderbolt/4.png");
}

function setup() {
  createCanvas(400, 400);
  thunder = createSprite(random(0, 400), random(0, 20), 20, 20);
  thunder.addImage("thunder",t1)
  ground = createSprite(200, 400, 400, 20);
  //creates engine from function "create" in Engine class (in matter.js)
  //engine is stored in variable engine
  engine = Engine.create();

  //namespaces property "world" of engine
  world = engine.world;

  // drop = new Drop(200, 100);
  umbrellas = new Umbrella(200, 270);

  if (frameCount % 20 === 0) {
    for (var i = 0; i < maxDrops; i++) {
      drops.push(new Drop(random(0, 400), random(0, 400)));
    }
  }
}

function draw() {
  background(0);

  Engine.update(engine);

  for (var j = 0; j < maxDrops; j++) {
    drops[j].update();
    drops[j].display();
  }
  if (frameCount % 85 === 0) {
    thunder.x = random(0,400)
    thunder.y = random(0,20)
//    thunder = createSprite(random(0, 400), random(0, 20), 20, 20);
    thunder.scale = random(0.3,0.6);

    var rand = Math.round(random(1, 4));

    switch (rand) {
      case 1:
        thunder.addImage("thunder", t1);
        break;
      case 2:
        thunder.addImage("thunder", t2);
        break;

      case 3:
        thunder.addImage("thunder", t3);
        break;

      case 4:
        thunder.addImage("thunder", t4);
        break;
      default:
        break;
    }
  }

  umbrellas.display();
  drawSprites();
}
