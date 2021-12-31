var red_car_player, red_carImage, blue_car, blue_carImage, green_car, green_carImage, yellow_car, yellow_carImage, purple_car, purple_carImage;
var roadBg, roadBgImage;
var gameState = "play";
var carGroup;
var gameOver;
var score;

function preload() {
  roadBgImage = loadImage("road_for_game.png");
  
  red_carImage = loadImage("red_race_car.svg");
  blue_carImage = loadImage("blue_race_car.png");
  green_carImage = loadImage("green_race_car.png");
  yellow_carImage = loadImage("yellow_race_car.png");
  purple_carImage = loadImage("purple_race_car.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  roadBg = createSprite(displayWidth, displayHeight/2)
  roadBg.addImage("road", roadBgImage);
  roadBg.velocityX = -10;
  roadBg.scale = 2.7
  
  red_car_player = createSprite(75, 150, 20, 20);
  red_car_player.addImage("red car", red_carImage);
  red_car_player.scale = 0.1;
  
  carGroup = new Group();

}

function draw() {
  background("white");
  
  camera.position.x = red_car_player.x + 500;
  camera.position.y = displayHeight/2;

  if (gameState === "play") {
    score = frameCount;
    
    

    gameOver = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
    gameOver.shapeColor = "black";
    gameOver.visible = false;
    
    
    if (roadBg.x === 0) {
      roadBg.x = 450;
    }
    
    if (keyDown("up") && red_car_player.y > 25) {
      red_car_player.y -= 5;
    }
    if (keyDown("down") && red_car_player.y < 375) {
      red_car_player.y += 5;
    }
    
    spawnCars();
    
    
    if (red_car_player.isTouching(carGroup)) {
      gameState = "end";
    }
    
  }
  
  
  
  drawSprites();
  
  
  if (gameState === "end") {
    roadBg.velocityX = 0;
    carGroup.destroyEach();
    
    gameOver.visible = true;
    
    textSize((3/40)*displayHeight);
    fill("white");
    text("Game Over!", displayWidth/2, displayHeight/2);
    textSize((3/80)*displayHeight);
    text("Press R to restart!", displayWidth/2, displayHeight/2 + displayHeight/20);
    
    if (keyDown("r")) {
      gameOver.visible = false;
      roadBg.velocityX = -10;
      frameCount = 0;
      red_car_player.y = 150;
      
      gameState = "play";
    }
    
  }
  
  textSize((3/80)*displayHeight);
  fill("white");
  text("Score: " + score, 170, 50)
  
}


function spawnCars() {
  if (frameCount % 150 === 0) {
    var selectColor = Math.round(random(1, 4));
    
    if (selectColor === 1) {
      var selectPosition =  Math.round(random(1, 4));
      
      if (selectPosition === 1) {
        blue_car = createSprite(450, 50);
        blue_car.addImage("blue car", blue_carImage);
        blue_car.scale = 0.12;
        blue_car.velocityX = -5;
        blue_car.lifetime = 100;
        blue_car.mirrorX(-1);
        carGroup.add(blue_car);
      }
      
      if (selectPosition === 2) {
        blue_car = createSprite(450, 150);
        blue_car.addImage("blue car", blue_carImage);
        blue_car.scale = 0.12;
        blue_car.velocityX = -5;
        blue_car.lifetime = 100;
        blue_car.mirrorX(-1);
        carGroup.add(blue_car);
      }
      
      if (selectPosition === 3) {
        blue_car = createSprite(450, 250);
        blue_car.addImage("blue car", blue_carImage);
        blue_car.scale = 0.12;
        blue_car.velocityX = -5;
        blue_car.lifetime = 100;
        blue_car.mirrorX(-1);
        carGroup.add(blue_car);
      }
      
      if (selectPosition === 4) {
        blue_car = createSprite(450, 350);
        blue_car.addImage("blue car", blue_carImage);
        blue_car.scale = 0.12;
        blue_car.velocityX = -5;
        blue_car.lifetime = 100;
        blue_car.mirrorX(-1);
        carGroup.add(blue_car);
      }
    }
    
    if (selectColor === 2) {
      var selectPosition =  Math.round(random(1, 4));
      
      if (selectPosition === 1) {
        green_car = createSprite(450, 50);
        green_car.addImage("green car", green_carImage);
        green_car.scale = 0.12;
        green_car.velocityX = -5;
        green_car.lifetime = 100;
        green_car.mirrorX(-1);
        carGroup.add(green_car);
      }
      
      if (selectPosition === 2) {
        green_car = createSprite(450, 150);
        green_car.addImage("green car", green_carImage);
        green_car.scale = 0.12;
        green_car.velocityX = -5;
        green_car.lifetime = 100;
        green_car.mirrorX(-1);
        carGroup.add(green_car);
      }
      
      if (selectPosition === 3) {
        green_car = createSprite(450, 250);
        green_car.addImage("green car", green_carImage);
        green_car.scale = 0.12;
        green_car.velocityX = -5;
        green_car.lifetime = 100;
        green_car.mirrorX(-1);
        carGroup.add(green_car);
      }
      
      if (selectPosition === 4) {
        green_car = createSprite(450, 350);
        green_car.addImage("green car", green_carImage);
        green_car.scale = 0.12;
        green_car.velocityX = -5;
        green_car.lifetime = 100;
        green_car.mirrorX(-1);
        carGroup.add(green_car);
      }
    }
    
    if (selectColor === 3) {
      var selectPosition =  Math.round(random(1, 4));
      
      if (selectPosition === 1) {
        yellow_car = createSprite(450, 50);
        yellow_car.addImage("yellow car", yellow_carImage);
        yellow_car.scale = 0.16;
        yellow_car.velocityX = -5;
        yellow_car.lifetime = 100;
        yellow_car.mirrorX(-1);
        carGroup.add(yellow_car);
      }
      
      if (selectPosition === 2) {
        yellow_car = createSprite(450, 150);
        yellow_car.addImage("yellow car", yellow_carImage);
        yellow_car.scale = 0.16;
        yellow_car.velocityX = -5;
        yellow_car.lifetime = 100;
        yellow_car.mirrorX(-1);
        carGroup.add(yellow_car);
      }
      
      if (selectPosition === 3) {
        yellow_car = createSprite(450, 250);
        yellow_car.addImage("yellow car", yellow_carImage);
        yellow_car.scale = 0.16;
        yellow_car.velocityX = -5;
        yellow_car.lifetime = 100;
        yellow_car.mirrorX(-1);
        carGroup.add(yellow_car);
      }
      
      if (selectPosition === 4) {
        yellow_car = createSprite(450, 350);
        yellow_car.addImage("yellow car", yellow_carImage);
        yellow_car.scale = 0.16;
        yellow_car.velocityX = -5;
        yellow_car.lifetime = 100;
        yellow_car.mirrorX(-1);
        carGroup.add(yellow_car);
      }
    }
    
    if (selectColor === 4) {
      var selectPosition =  Math.round(random(1, 4));
      
      if (selectPosition === 1) {
        purple_car = createSprite(450, 50);
        purple_car.addImage("purple car", purple_carImage);
        purple_car.scale = 0.16;
        purple_car.velocityX = -5;
        purple_car.lifetime = 100;
        purple_car.mirrorX(-1);
        carGroup.add(purple_car);
      }
      
      if (selectPosition === 2) {
        purple_car = createSprite(450, 150);
        purple_car.addImage("purple car", purple_carImage);
        purple_car.scale = 0.16;
        purple_car.velocityX = -5;
        purple_car.lifetime = 100;
        purple_car.mirrorX(-1);
        carGroup.add(purple_car);
      }
      
      if (selectPosition === 3) {
        purple_car = createSprite(450, 250);
        purple_car.addImage("purple car", purple_carImage);
        purple_car.scale = 0.16;
        purple_car.velocityX = -5;
        purple_car.lifetime = 100;
        purple_car.mirrorX(-1);
        carGroup.add(purple_car);
      }
      
      if (selectPosition === 4) {
        purple_car = createSprite(450, 350);
        purple_car.addImage("purple car", purple_carImage);
        purple_car.scale = 0.16;
        purple_car.velocityX = -5;
        purple_car.lifetime = 100;
        purple_car.mirrorX(-1);
        carGroup.add(purple_car);
      }
    }
    
  }
}