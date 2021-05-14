var bg;
var doodlerleftImg, doodlerrightImg, doodler;
var eagleImg, eagle, frogImg, frog, snakeImg, snake;
var helicopterImg, helicopter, potionImg, potion, springImg, spring;
var platformImg, platform, platformGroup, platformTop, platformTopGroup, powerPlatform, powerPlatformGroup;
var springSound, helicopterSound, deathSound;
var ground, powerUps, powerUpsGroup;

function preload(){
  bg = loadImage("images/bg.png");
  doodlerleftImg = loadImage("images/doodlerleft.png");
  doodlerrightImg = loadImage("images/doodlerright.png");
  eagleImg = loadImage("images/eagle.png");
  frogImg = loadImage("images/frog.png");
  snakeImg = loadImage("images/snake.png");
  helicopterImg = loadImage("images/helicopter cap.png");
  potionImg = loadImage("images/potion.png");
  springImg = loadImage("images/spring.png");
  platformImg = loadImage("images/platform.png");
  springSound = loadSound("Sound/boing3.wav");
  helicopterSound = loadSound("Sound/helicopter.mp3");
  deathSound = loadSound("Sound/death-sound.mp3");
}

function setup() {
  createCanvas(displayWidth*(1/2), displayHeight);
  doodler = createSprite(displayWidth/4, displayHeight-100);
  doodler.addImage("left", doodlerleftImg);
  doodler.addImage("right", doodlerrightImg);

  ground = createSprite(displayWidth/4, displayHeight, displayWidth/2, 10);
  ground.visible = false;

  platformGroup = new Group();
  platformTopGroup = new Group()
  powerPlatformGroup = new Group();
  powerUpsGroup = new Group();

  spawnPlatform();
  spawnPowerPlatform();
}

function draw() {
  background(bg);
  
  if(keyDown('space')){
    doodler.velocityY = -14
  }

  if(keyDown('LEFT_ARROW')){
    doodler.x = doodler.x-4
    doodler.changeImage("left", doodlerrightImg);
  }

  if(keyDown('RIGHT_ARROW')){
    doodler.x = doodler.x+4
    doodler.changeImage("right", doodlerrightImg);
  }

  doodler.velocityY = doodler.velocityY + 0.9

  doodler.collide(ground)

  console.log(doodler.velocityY);

  if(platformTopGroup.isTouching(doodler)){
    
    doodler.collide(platformTopGroup);
    doodler.velocityY = -16
  }
  drawSprites();
}

function spawnPlatform(){
  for(var i = 0; i<=displayHeight; i = i+70){
    var hPosition = Math.round(random(10, displayWidth/2))
    console.log(hPosition)
    platform = createSprite(Math.round(random(10, displayWidth/2)), i)
    platform.addImage(platformImg);
    platform.scale = 0.8;
    platformTop = createSprite(platform.x, platform.y-10, 75, 2)
    platformTopGroup.add(platformTop)
 }
  
  platformGroup.add(platform);
}

function spawnPowerPlatform(){
  for(var i = 0; i<=displayHeight; i = i+300){
    var hPosition = Math.round(random(10, displayWidth/2))
    console.log(hPosition)
    powerPlatform = createSprite(Math.round(random(10, displayWidth/2)), i)
    powerPlatform.addImage(platformImg);
    powerPlatform.scale = 0.8;
    powerUps = createSprite(platform.x, platform.y-20)
    powerUpsGroup.add(powerUps)

    powerUps.addImage(springImg)
    powerUps.scale = 0.1
 }
  
  powerPlatformGroup.add(powerPlatform);
}