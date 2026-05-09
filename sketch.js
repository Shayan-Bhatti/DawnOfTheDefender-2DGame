//Shayan Bhatti
//Jan 8, 2024
//Dawn of the Defender

//Declaring variables
var walk1;
var walk2;
var walk3;
var s2Walk1;
var s2Walk2;
var s2Walk3;
var s3Walk1;
var s3Walk2;
var s3Walk3;
var healthBarPic = 4;
var hurtCount = 0;
var zombieHp1;
var zombieHp2;
var playAgain;
var zombieHp3;
var zombieHp4;
var playAgain;
var ammo = 15;
var emptyGun;
var relodGun;
var setLevel = true;
var characterStyleSlider = 0;
var bgMusic;
cooldownRange = 60; //initialized cooldown range as 60
var bossBulletCooldownTimer = 0; //initialized boss bullet cooldown timer as 60
var bossCooldown = true;
var playerCrosshairAngle = 0; //initialized player crosshair angle as 0
var largeBossAttackCooldown = 0; //initialized largeBossAttackCooldown as 0
var bossBulletDistance;
var bossHealth = 100; //boss health initilized as 100
var bossDeath = false; //bossDeath set to false
var bossSpeed = 2; //boss speed set to 2
var bossBullet;
var death = false; //death set to false (this is player death)
var s3Walk1;
var s3Walk2;
var s3Walk3;
var randomEnemySpeeds = [1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5]; //made list of random enemy speeds ot choose from later
var randomBossSpeeds = [3, 9, 6]; //made list of random boss speeds

var direction = 1; //direction set to 1

var zombieDealer1;
var zombieDealer2;

var boss1;
var bossX = 1665; //boss location, x and y are set
var bossY = -225;

var gameMap;
var zombieWalk1;
var zombieWalk2;
var zombieWalk3;
var gameCursor;

//these are the cordinates to the center of the screen, a lot of x and y values in this code are actually based off these cordinates,
x = 530;
y = 320;
var username = "Untitled Character";
var zombiesMoveY;
var zombiesMoveX;
//arrays for collsion boxes
var collisionStartX = [];
var collisionEndX = [];
var collisionStartY = [];
var collisionEndY = [];
var zombies = [];
var bullets = [];
var bossBullets = [];
var collisionOccured = false; // collsion occurence initialized to false
//player x and y are both 0
playerX = 0;
playerY = 0;
//camera x and y are both 0
var cameraX = 0;
var cameraY = 0;
//player speed is 5
Playerspeed = 5;
//waling in all directions set to false
walkUp = false;
walkDown = false;
walkLeft = false;
walkRight = false;

//initialized variables needed for animation (such have a walk cycle on screen)
var frameCountWalk = 0;
var zFrameCountWalk = 0;
var zWalkFrame = 1;
var zombieWalkCycle;
var hpCycle;
var dZombieBounceCycle;
var walkCycle;
var walkFrame = 1;
var backgroungMusic;

var sceneType = "menu";
//used setup function to preload some images, and other foundational things
function preload(){
   bgMusic = loadSound("Assets/audio/bgmusiic.mp3");
}
var bgmusicplay = function (){
  bgMusic.play();
  bgMusic.loop();
  userStartAudio();
}
function setup() {
  bgmusicplay();
  quote1 = loadImage("Assets/images/Q1.png");
  quote2 = loadImage("Assets/images/Q2.png");
  quote3 = loadImage("Assets/images/Q3.png");
  quote4 = loadImage("Assets/images/Q4.png");
  quote5 = loadImage("Assets/images/Q5.png");
  quote6 = loadImage("Assets/images/Q6.png");
  quote7 = loadImage("Assets/images/Q7.png");
  
  walk1 = loadImage("Assets/images/S1Walk1.png");
  walk2 = loadImage("Assets/images/S1Walk2.png");
  walk3 = loadImage("Assets/images/S1Walk3.png");

  s2Walk1 = loadImage("Assets/images/S2Walk1.png");
  s2Walk2 = loadImage("Assets/images/S2Walk2.png");
  s2Walk3 = loadImage("Assets/images/S2Walk3.png");

  s3Walk1 = loadImage("Assets/images/S3Walk1.png");
  s3Walk2 = loadImage("Assets/images/S3Walk2.png");
  s3Walk3 = loadImage("Assets/images/S3Walk3.png");
  
  playAgain = loadImage("Assets/images/Screenshot 2024-05-04 at 3.55.20 AM.png");
  createCanvas(1060, 640); //canvas size: 1060px by 640px
  noCursor(); //cursor turned off so the crosshair is the only mouse on screen
  shootSound = loadSound("Assets/audio/762x54r Single MP3.mp3"); //loaded shooting sound
  bloodSound = loadSound("Assets/audio/gutHitSound.mp3"); //loaded shooting sound
  maxBloodSound = loadSound("Assets/audio/gutmaxHitSound.mp3");
  emptyGun = loadSound("Assets/audio/AR Bolt Release MP3.mp3");
  relodGun = loadSound("Assets/audio/308 Bolt Cycle MP3.mp3");

  //loaded all player walking images
  walk1 = loadImage("Assets/images/S1Walk1.png");
  walk2 = loadImage("Assets/images/S1Walk2.png");
  walk3 = loadImage("Assets/images/S1Walk3.png");

  //loaded all zombie walking images
  zombieWalk1 = loadImage("Assets/images/zWalk3.png");
  zombieWalk2 = loadImage("Assets/images/zWalk2.png");
  zombieWalk3 = loadImage("Assets/images/zWalk1.png");
  zombieWalk4 = loadImage("Assets/images/dead_zom.png");
  
  zombieHp1 = loadImage("Assets/images/1Hp.png");
  zombieHp2 = loadImage("Assets/images/2Hp.png");
  zombieHp3 = loadImage("Assets/images/3Hp.png");
  zombieHp4 = loadImage("Assets/images/4Hp.png");

  //loaded "the random zombie store guy who dosnet sell anything"'s images
  zombieDealer1 = loadImage("Assets/images/zombieDealer1.png");
  zombieDealer2 = loadImage("Assets/images/zombieDealer2.png");

  //bullet loaded image
  bullet = loadImage("Assets/images/bullet.png");

  // loaded game map image
  gameMap = loadImage("Assets/images/map.png");

  //loaded boss image
  boss1 = loadImage("Assets/images/boss1.png");

  //loaded boss bullet image
  bossBullet = loadImage("Assets/images/bossBullet.png");

  //loaded  game cursor image
  gameCursor = loadImage("Assets/images/cursorV2.png");
  menuScreen = loadImage("Assets/images/menu.png");
  menuCursor = loadImage("Assets/images/menuCursorV2.png");
  characterSelector = [walk1, s2Walk1, s3Walk1];

  imageMode(CENTER);//set image mode to center so all images are referenced from center instead of top left corner
  //made arrays for animation cycles
  walkCycle = [walk1, walk2, walk3];
  zombieWalkCycle = [zombieWalk1, zombieWalk2, zombieWalk3, zombieWalk4];
  hpCycle = [zombieHp1, zombieHp2, zombieHp3, zombieHp4];
  dZombieBounceCycle = [zombieDealer1, zombieDealer2];
  
}
var circleButtonClicked = function (buttonX, buttonY) {
  var distanceMouseButton = Math.sqrt(
    (buttonX - mouseX) ** 2 + (buttonY - mouseY) ** 2
  );
  
  if (distanceMouseButton <= 60) {
    return true;
  }
  return false;
};

var rectButtonClicked = function (buttonX1, buttonX2, buttonY1, buttonY2) {
  if (
    mouseX >= buttonX1 &&
    mouseX <= buttonX2 &&
    mouseY >= buttonY1 &&
    mouseY <= buttonY2
  ) {
    return true;
  }
  return false;
};
//this function takes 4 values (a min x value, a max x value, a min y value, and a max y value) and pushes them into an array to be used by another function
var objectCollsionBounds = function (x1, x2, y1, y2) {
  //pushing each value into its own array
  collisionStartX.push(x1);
  collisionEndX.push(x2);
  collisionStartY.push(y1);
  collisionEndY.push(y2);
};
//this function returns a boolean based on wether the player has collided with any boundries. Takes x and y of object, and then the type of object since each object might have diffrent collsions
var objectCollided = function (xObject, yObject, object) {
  if (object === "player") {//if the object is player
    for (var i = 0; i < collisionStartX.length; i++) {//for every single value pushed to the collsion list for x
      if (
        xObject >= collisionStartX[i] &&
        xObject <= collisionEndX[i] &&
        yObject >= collisionStartY[i] &&
        yObject <= collisionEndY[i]
      ) {//if the x object is greater than the stating x, less then ending x, greter than start y, and less than end y
        return true;//the object is colliding so return true
      }
    }
    return false;//returns false, if the true isnt returnd
  } else if (object === "bullet") {//if the object is bullet
    for (var j = 0; j < collisionStartX.length; j++) {//for every single value pushed to the collsion list for x
      if (
        xObject >= collisionStartX[j] + 9 &&
        xObject <= collisionEndX[j] - 9 &&
        yObject >= collisionStartY[j] + 9 &&
        yObject <= collisionEndY[j] - 9
      ) {//if the x object is greater than the stating x, less then ending x, greter than start y, and less than end y. ALL arrays are either added or subtracted 9 to accodate for the diffrent size and shape of bullet compared to player.
        return true;//the object is colliding so return true
      }
    }
    return false;//returns false, if the true isnt returnd
  } else if (object === "zombie") {//if the object is zombie
    for (var k = 0; k < collisionStartX.length; k++) {//for every single value pushed to the collsion list for x
      if (
        xObject >= collisionStartX[k] + 11 &&
        xObject <= collisionEndX[k] - 11 &&
        yObject >= collisionStartY[k] + 11 &&
        yObject <= collisionEndY[k] - 11
      ) {//if the x object is greater than the stating x, less then ending x, greter than start y, and less than end y. ALL arrays are either added or subtracted 11 to accodate for the diffrent size and shape of zombie compared to player.
        return true;//the object is colliding so return true
      }
    }
    return false;//returns false, if the true isnt returnd
  }
};

//here are all the collsion bounds that objects cant pass through

objectCollsionBounds(-135, -50, -405, 165);
objectCollsionBounds(-60, 245, -150, -80);
objectCollsionBounds(-60, 115, -880, -320);
objectCollsionBounds(-120, 145, -1210, -845);
objectCollsionBounds(-135, -20, -1580, -1000);
objectCollsionBounds(-140, 1110, -1650, -1525);
objectCollsionBounds(120, 180, -1570, -1340);
objectCollsionBounds(700, 765, -1570, -1385);
objectCollsionBounds(-140, 595, 100, 175);
objectCollsionBounds(485, 595, -955, 180);
objectCollsionBounds(190, 1025, -1200, -845);
objectCollsionBounds(185, 700, -315, -255);
objectCollsionBounds(365, 425, -1385, -1150);
objectCollsionBounds(530, 595, -1460, -1150);
objectCollsionBounds(855, 910, -1290, -1000);
objectCollsionBounds(1030, 1235, -1280, -1000);
objectCollsionBounds(1030, 1235, -1280, -1000);
objectCollsionBounds(1030, 1235, -1725, -1325);
objectCollsionBounds(825, 1120, -1440, -1375);
objectCollsionBounds(1210, 1460, -1210, -725);
objectCollsionBounds(1505, 1900, -1210, -725);
objectCollsionBounds(1730, 1860, -1630, -1100);
objectCollsionBounds(1125, 1860, -1630, -1515);

objectCollsionBounds(1125, 1300, -810, 220);
objectCollsionBounds(1810, 1885, -810, 220);
objectCollsionBounds(1105, 1915, 75, 220);
objectCollsionBounds(1395, 1460, -725, -380);
objectCollsionBounds(1690, 1750, -300, 70);

objectCollsionBounds(1515, 1580, -750, -390);

objectCollsionBounds(1395, 1720, -325, -265);

objectCollsionBounds(1545, 1740, -445, -385);
objectCollsionBounds(1230, 1740, -1600, -1380);

//making a zombie function to define an object. Takes x and y position of zombie
var zombie = function (zombiesX, zombiesY) {
  this.zombiesX = zombiesX;//the zombie x specific to each object is defnied
  this.zombiesY = zombiesY;//the zombie y specific to each object is defnied
  this.zombiesSpeed =
    randomEnemySpeeds[Math.floor(Math.random() * randomEnemySpeeds.length)];//chooses a random value from the list of speeds for enemy
  this.delete = false;//delete is set to false
  this.standing = false;//standig is set to false
  this.health = 4;//health is 4 for each zombie (SHOOT IT 4 TIMES)
  this.healthBarPic = 4;
};
//making the update function for the zombie object
zombie.prototype.update = function () {
  this.playerZombiesDisX = playerX - this.zombiesX;//finds x distance between player and zombie by subtracting the two
  this.playerZombiesDisY = playerY - this.zombiesY;//finds y distance between player and zombie by subtracting the two

  this.playerZombiesChaseAngle = Math.atan2(
    this.playerZombiesDisY,
    this.playerZombiesDisX
  );//finds the angle between zombie and player
  this.zombiePlayerDistance = Math.sqrt(
    (playerX - this.zombiesX) ** 2 + (playerY - this.zombiesY) ** 2
  );//finds the distance between zombie and player

  this.zombiesMoveY =
    Math.sin(this.playerZombiesChaseAngle) * this.zombiesSpeed;//finds the sin of the angle between zombie and player and then multiples it with speed.This allows the zombie to move in the y direction

  this.zombiesMoveX =
    Math.cos(this.playerZombiesChaseAngle) * this.zombiesSpeed;//finds the cos of the angle between zombie and player and then multiples it with speed.This allows the zombie to move in the x direction

  this.zombiesX = this.zombiesX + this.zombiesMoveX;//updates zombie position by adding the zombies movement from the last line
  this.standing = false;//standing is false
  if (
    objectCollided(this.zombiesX, this.zombiesY, "zombie") ||
    this.zombiePlayerDistance > 450
  ) {//if the object has collided or the zombie is too far from the player
    this.zombiesX = this.zombiesX - this.zombiesMoveX;//undo any movement using opposite operations
    this.standing = true;//making standing true
  }
  this.zombiesY = this.zombiesY + this.zombiesMoveY;//updates zombie y position by adding the zombies y movement
  if (
    objectCollided(this.zombiesX, this.zombiesY, "zombie") ||
    this.zombiePlayerDistance > 450
  ) {//if the object has collided or the zombie is too far from the player
    this.standing = true;//making standing true
    this.zombiesY = this.zombiesY - this.zombiesMoveY;//undo any movement using opposite operations
  }

  //using tan inverse to find the angle between zombie and player so zombie knows where to face
  this.zombieRotation = Math.atan2(
    playerY - this.zombiesY,
    playerX - this.zombiesX
  );
  push();//this basically makes all the follwing changes applie only to the wanted image

  translate(this.zombiesX - playerX + 530, this.zombiesY - playerY + 320);//translate the image so that it can be roated.When the zombie is overlapping the player, the difference between zombiesX and playerX is 0.  Since the player is always drawn at the center of the screen (530,320), when this difference is 0, the zombie should also be drawn at (530,320), so this offset is added to the difference.
  
  rotate(this.zombieRotation + PI / 2);//rotate the image facing the player, add pi/2 to make the zombie look at player more accuratley
  image(hpCycle[this.health-1],0,50,30,6);
  if(this.hurt == true){
    image(zombieWalkCycle[3], 0, 0, 50, 80);//use this image
  }
  else if (this.standing) {//if standing is true
    image(zombieWalkCycle[2], 0, 0, 50, 80);//use this image
  }  
  else {//other wise
    image(zombieWalkCycle[zWalkFrame], 0, 0, 50, 80);//use this image
  }
  pop();
  
  for (var j = 0; j < bullets.length; j++) {//for every bullet in the bullet list
    this.zombieBulletDistance = Math.sqrt(
      (bullets[j].bulletX - this.zombiesX) ** 2 +
        (bullets[j].bulletY - this.zombiesY) ** 2
    );//find distance between bullet and zombie using distance formula

    if (this.zombieBulletDistance <= 40) {//if the zombie bullet distance is less than 40
      this.health--;//decrease health by 1
      bloodSound.play()
      if(this.health == 0){
        maxBloodSound.play()
      }
      this.hurt = true;
      bullets[j].delete = true;//delete the bullets that came in contact with zombie
    }
  }
  if (this.hurt){
    hurtCount++;
    if (hurtCount == 10){
      this.hurt = false;
      hurtCount = 0;
    }
  }
  if(this.health == 4){
    this.healthBarPic = 3;
  }else if(this.health == 3){
    this.healthBarPic = 2;
  }else if(this.heatlh == 2){
    this.healthBarPic = 1;
  }else{
    this.healthBarPic = 0;
  }
  if (this.zombiePlayerDistance <= 40) {//if the zombie bullet player distance is less than 40
  
    death = true;//player dies
  } else if (this.health <= 0) {//else if, the zombie health is 0 or lower
    this.delete = true;//zombie dies
  }
if(setLevel){
  death = false;
}
  
};
//this function simplifies the push line and uses a 2 peramaters x locationa dn y location of zombie, and does the pushing into the array for you
var addZombie = function (xLocation, yLocation) {
  zombies.push(new zombie(xLocation, yLocation));//push into zombie list
};



//function defines bullet object, the startign values and direction of bullet
var bulletSpawn = function (bulletX, bulletY, bulletDirection) {
  this.bulletDirection = bulletDirection;//defined bullet direction for each object
  this.bulletX = bulletX + 50 * Math.cos(this.bulletDirection);//offsets where the bullet is created so that it can come out the nosle of gun. Done by adding bulletx to 50 and multipling it with cos of bullet direction 
  this.bulletY = bulletY + 50 * Math.sin(this.bulletDirection);//offsets where the bullet is created so that it can come out the nosle of gun. Done by adding bulletY to 50 and multipling it with sin of bullet direction 

  this.bulletX += 10 * Math.cos(this.bulletDirection + PI / 2);//modifys the direction at which the bullet is aiming for x value by taking the cosine of the bullet direction adding pi/2 and multipying it with 10
  this.bulletY += 10 * Math.sin(this.bulletDirection + PI / 2);//modifys the direction at which the bullet is aiming for y valueby taking the sin of the bullet direction adding pi/2 and multipying it with 10
  this.delete = false;//deleting is false
};
//made an update function for bullet object
bulletSpawn.prototype.update = function () {
  this.bulletMoveX = Math.cos(this.bulletDirection) * 9;//finds the ratio to move the bullet my taking cos of bullet direction and multiplying it by 9
  this.bulletMoveY = Math.sin(this.bulletDirection) * 9;//finds the ratio to move the bullet my taking sin of bullet direction and multiplying it by 9

  this.bulletX = this.bulletX + this.bulletMoveX;//updates bullet postition by adding the ration we just defined for x
  this.bulletY = this.bulletY + this.bulletMoveY;//updates bullet postition by adding the ration we just defined for y

  //roates bullet to vissually look like its goign in the right diretion using the tan inverse of the diffrence between bullet y and mouse y, and bullet x and mouse x
  this.bulletRotation = Math.atan2(
    mouseY - this.bulletY,
    mouseX - this.bulletX
  );
  push();//makes it so the follwing changes are only applied to the image wanted
  translate(this.bulletX - playerX + 530, this.bulletY - playerY + 320);//adds the offset to everythign is relative to player and camera. 
  rotate(this.bulletDirection + PI / 2);//image is roated plus pi/2 is added
  image(bullet, 0, 0, 12.5, 20);//image is created
  pop();//pop ends all the transformation happenign before, so it dosent happen to other images
  if (objectCollided(this.bulletX, this.bulletY, "bullet")) {//if the bullet collides with something
    this.delete = true;//delete is true
  }
};

//made a function for the boss bullet object, accepts same parameters as the other bullet object function
var bossBulletSpawn = function (bulletX, bulletY, bulletDirection) {
  //uses the parameters in the same way as other function
  this.bulletX = bulletX;
  this.bulletY = bulletY;
  this.bulletDirection = bulletDirection;
  this.delete = false;
};
bossBulletSpawn.prototype.update = function () {
  //find the ratio to which x andf y need to move like mentioned in the last function
  this.bulletMoveX = Math.cos(this.bulletDirection) * 7;
  this.bulletMoveY = Math.sin(this.bulletDirection) * 7;

   //updates the location of the x and y like mentioned in the last function
  this.bulletX = this.bulletX + this.bulletMoveX;
  this.bulletY = this.bulletY + this.bulletMoveY;

  image(
    bossBullet,
    this.bulletX - playerX + 530,
    this.bulletY - playerY + 320,
    20,
    20
  );//offset added to ensure everythign is relative to player and camera. IMage is created

  if (objectCollided(this.bulletX, this.bulletY, "bullet")) {//if bullet is colided
    this.delete = true;//delete is true
  }

  this.BulletPlayer = Math.sqrt(
    (playerX - this.bulletX) ** 2 + (playerY - this.bulletY) ** 2
  );//finds distance between bullet and player using distance formula

    if (this.BulletPlayer <= 40) {//if less than 40
    death = true;//player dies
  }
  
  
};
//made a boss function (not an object bc i only needed one boss)
var boss = function () {
  bossY += bossSpeed * direction;//boss moves in the y only. multiplies speed with direction

  // Change direction when the boss reaches the top or bottom of its path
  if (bossY > 30) {//if more than 30
    bossY = 30;//snap it to 30 to ensure it dosent go off bounds
    direction *= -1;//change direction by -1
    bossSpeed =
      randomBossSpeeds[Math.floor(Math.random() * randomBossSpeeds.length)];
  }//randomize boss speed using the array of speeds
  if (bossY < -225) {//if boss y is less than -225
    bossY = -225;//snap it to -225 to ensure it dosent go off bounds
    direction *= -1;//change direction by -1
    bossSpeed =
      randomBossSpeeds[Math.floor(Math.random() * randomBossSpeeds.length)];
  }//randomize boss speed using the array of speeds

  //if boss colldown and boss death are not true
  if (!bossCooldown && !bossDeath) {
    playerBossDisX = playerX - bossX;//find the distance in x for player and boss by subtracting thier Xs
    playerBossDisY = playerY - bossY;//find the distance in y for player and boss by subtracting thier Ys
    playerBossAngle = Math.atan2(playerBossDisY, playerBossDisX);//finds inverse tand of the two distances to find an angle between player and booss 
    bossBullets.push(new bossBulletSpawn(bossX, bossY, playerBossAngle));
  }//appends a bullet ready to be shot to boss bullet list
  for (var k = 0; k < bossBullets.length; k++) {//for evey value in boss bullet list
    bossBullets[k].update();//update the boss bullet function
    if (bossBullets[k].delete) {//if boss bullets are to be deleted
      bossBullets.splice(k, 1);//splice list
      // k is decreased because splice shifts everything back 1 index (index 5 become 4 etc.)
      k--;
    }
  }

  bossBulletCooldownTimer++;//add to the bullet cooldown timer by 1

  if (bossBulletCooldownTimer >= cooldownRange) {//if the boss bullet cooldown timer is more than or equal to cooldown range
    bossCooldown = false;//bullet cooldown false
    bossBulletCooldownTimer = 0;//bullet cooldown timer 0
  } else {//otherwise
    bossCooldown = true;//boss cooldown true
  }
  if(bossHealth>=50){
    bulletSprayChangeRandom = 0.002;
    
  }else{
    bulletSprayChangeRandom = 0.01;
  }
  if (random(1) < bulletSprayChangeRandom) {//random chance of bullet spray IF random 1 is less than 0.002
    cooldownRange = 10;//cooldown range is now 10
    largeBossAttackCooldown = 40;//large bossattack cooldwon is 40
  }
  if (largeBossAttackCooldown > 0) {//if the large boss attack cooldown 
    largeBossAttackCooldown--;//large attack cooldown goes down by 1
    bossY = -95;//boss y is -95
  } else {//otherwise
    cooldownRange = 70;//cooldown range is 70
  }

  for (var l = 0; l < bullets.length; l++) {//for all elements in the bullet array
    bossBulletDistance = Math.sqrt(
      (bullets[l].bulletX - bossX) ** 2 + (bullets[l].bulletY - bossY) ** 2
    );//fidn distance between boss and bullets using distance formula

    if (bossBulletDistance <= 60) {//if the boss bullet distance is less than or equal to 60
      bossHealth--;//boss health goes down by 1
      bullets[l].delete = true;//bullets colliding with boss are deleted
    }
  }
  if (bossHealth <= 0) {//if boss health is less than or euqla to 0
    bossDeath = true;//boss death is true
  }
  if (!bossDeath) {//if not boss death
    image(boss1, bossX - playerX + 530, bossY - playerY + 320, 160, 160);//then draw image
  } else {//otherwise
    //display white text saying u won
    fill(255, 255, 255);
    textSize(30);
    text("You Won!", 1420 - playerX + 530, -75 - playerY + 320);
  }
};
//draw function loop
function draw() {
  if (sceneType === "play") {
   
    //here are all the zombies added
    if(setLevel){
      ammo = 15;
      zombies = [];
      addZombie(445, 25);
      addZombie(480, -125);
      addZombie(480, 95);
      addZombie(290, -230);
      addZombie(48, -250);
      addZombie(48, -250);
      addZombie(-45, -315);
      addZombie(410, -525);
      addZombie(160, -610);
      addZombie(335, -715);
      addZombie(50, -1425);
      addZombie(50, -1275);
      addZombie(305, -1275);
      addZombie(475, -1465);
      addZombie(705, -1285);
      addZombie(930, -1315);
      addZombie(930, -1465);
      addZombie(1655, -1295);
      addZombie(1305, -1260);
      addZombie(1660, -625);
      addZombie(1740, -475);
      addZombie(1740, -474);
      setLevel = false;
      death = false;
      playerX = 0;
      playerY = 0;
      cameraX = 0;
      cameraY = 0;
    }
    //if the frame count is greater than or equal to 15
    if (frameCountWalk >= 15) {
      walkFrame = 0;//walkfram is o
    } else {//otherwise
      walkFrame = 1;//walkfram is 1
    }
    if (frameCountWalk >= 30) {//if more than or equal to 30
      frameCountWalk = 0;//walkframe 0
    }
    if (walkRight || walkLeft || walkUp || walkDown) {//if walk in any direction is true
      frameCountWalk++;//increase frame count
    } else {//otherwise
      walkFrame = 2;//walk frame 2
    }

    //Walk Cycle for zombies
    //works same way as the above frame cycle
    if (zFrameCountWalk >= 15) {
      zWalkFrame = 0;
    } else {
      zWalkFrame = 1;
    }
    if (zFrameCountWalk >= 30) {
      zFrameCountWalk = 0;
    }//the diffrence in this one is that the frames are updated every loop through draw function and not when keys are pressed

    playerRotation = Math.atan2(mouseY - y, mouseX - x);//find the difrrences in Ys and Xs for mouse and player and find inverse tan of that to find the angle of player roation

    background(36, 36, 36);//sert background to dark colour
    image(gameMap, cameraX, cameraY, 2000, 2000);//draw game map

    image(
      dZombieBounceCycle[zWalkFrame],
      1480 - playerX + 530,
      -1450 - playerY + 320,
      450,
      450
    );//draw the guy who sells nothing at the store. Offset is added to values to keep everything relative to player and camera
    push();//push will make other images not affect by follwing lines
    //translate, rotate and draw the player
    translate(x, y);
    rotate(playerRotation + PI / 2);
    image(walkCycle[walkFrame], 0, -10, 50, 80);

    pop();//pop prevents all the previous transformation from affecting other images
    for (var j = bullets.length - 1; j >= 0; j--) {//for every elemnt in bullet array
      bullets[j].update();//update bullets

      if (bullets[j].delete) {//if bullets are to be deleted
        bullets.splice(j, 1);//splice array
        // j is decreased because splice shifts everything back 1 index (index 5 become 4 etc.)
        j--;
      }
    }

    boss();//invoke boss function

    if (walkUp) {//if walk up is true
      cameraY += Playerspeed;//add player speed to  camera 
      playerY -= Playerspeed;//subtract player speed from playerY
      if (objectCollided(playerX, playerY, "player")) {//if object is collided
        //do oppsotie operations to cancle the movment
        playerY += Playerspeed;
        cameraY -= Playerspeed;
      }
    }
    if (walkDown) {//if walk left is true
      cameraY -= Playerspeed;//subtract player speed from  camera 
      playerY += Playerspeed;//add player speed to playerY
      if (objectCollided(playerX, playerY, "player")) {//if object collided
        //do oppsite operations to cancle movment
        playerY -= Playerspeed;
        cameraY += Playerspeed;
      }
    }
    if (walkLeft) {//if walk left is true
      cameraX += Playerspeed;//add player speed to  camera 
      playerX -= Playerspeed;//subtract player speed from playerY
      if (objectCollided(playerX, playerY, "player")) {//if object collided
        //do oppsite operations to cancle movment
        playerX += Playerspeed;
        cameraX -= Playerspeed;
      }
    }
    if (walkRight) {//if walk right is true
      cameraX -= Playerspeed;//subtract player speed from  camera 
      playerX += Playerspeed;//add player speed to playerY
      if (objectCollided(playerX, playerY, "player")) {//if object collided
        //do oppsite operations to cancle movment
        playerX -= Playerspeed;
        cameraX += Playerspeed;
      }
    }

    cameraX = -playerX + 1430;//camera x is offset to be relative to player
    cameraY = -playerY - 375;//camera y is offset to be relative to player

    for (var i = 0; i < zombies.length; i++) {//for all elemnts in zombies array
      zombies[i].update();//update zombies
      if (zombies[i].delete) {//if zombies are to be deleted
        zombies.splice(i, 1);//splice the zombies array
        // i is decreased because splice shifts everything back 1 index (index 5 become 4 etc.)
        i--;
      }
    }

    zFrameCountWalk++;//increase fram count for zombie walk cycle

    image(gameCursor, mouseX, mouseY, 40, 40);//draw crosshair cursor on mouseX and Y
    rect(mouseX +20, mouseY-12, 5,25)
    if(ammo >=13){
      fill(225,225,225)
    }else if(ammo >=10){
      fill(225,191,191)
    }else if(ammo >=7){
      fill(225,143,143)
    }else if(ammo >=3){
      fill(225,107,107)
    }else{
      fill(225,0,0)
    }
    
    rect(mouseX +21.1, mouseY-10.5, 3,21)
    textSize(12)
    if(ammo === 0){
      fill(225,0,0)
    text("[R]",mouseX +13, mouseY+26 )
    }
    
    fill(225,225,225)
    noStroke();
    rect(5,5,100,30)
     image(
    bullet,
    15,
    20,
    20,
    20
  );
    fill(0,0,0)
    textSize(25);
    if(ammo <10){
      text(ammo, 50,29)
    }else{
      text(ammo, 40,29)
    }
   

    if (death) {//if player dies
      //say u lost on black screen with white text
      sceneType = "lost"
      quoNum = random(7)
      setLevel = true;
      textSize(30);
      fill(0, 0, 0);
      //rect(0, 0, 1060, 640);
      fill(225, 225, 225);
      //text("You Lost", 530, 320);
    }
    print(playerX + " " + playerY);                        
    if (playerX >= 1290 && playerX<=1850&&playerY >= -470 & playerY <= 70){
      
      textSize(20)
      fill(225,225,225)
      text("Final Boss",320,20)
        fill(0,0,0);
        rect(320,25,420,30)
      fill(200,0,0);
        rect(330,30,400 - (400-(bossHealth*4)),20)
      fill(0,0,0);
    }
  }else if (sceneType === "menu") {
    image(menuScreen, 530, 320, 1060, 640);
    fill(225, 225, 225);
    textFont("Arial Black", 10);
    
    fill(250,250,250);
    rect(150,250,400,300);
    fill(0,0,0);
    textFont("Arial Black", 15);
    text("Dawn of the Defender is a fast-paced, 2D,",160,320)
    text("top-down shooter set in a post-apocalyptic",160,340)
    text("world overrun by zombies. You play as the",160,360)
    text("last line of defense - a lone survivor battling",160,380)
    text("through hordes of the undead with one goal:",160,400)
    text("defeat the powerful zombie boss and reclaim",160,420)
    text("what's left of humanity. Armed with deadly",160,440)
    text("weapons and quick reflexes, you’ll face wave",160,460)
    text("after wave in a relentless fight for survival.",160,480)
    
    //2D top-down shooter set in a post-apocalyptic world overrun by zombies. You play as the last line of defense—a lone survivor battling through hordes of the undead with one goal: defeat the powerful zombie boss and reclaim what's left of humanity. Armed with deadly weapons and quick reflexes, you’ll face wave after wave in a relentless fight for survival.",160,220)
    
    //text("MouseX: " + mouseX + "      MouseY: " + mouseY, 10, 10);
    
   
    //18 charecters

    image(characterSelector[characterStyleSlider], 816, 300, 175, 280);

    image(menuCursor, mouseX, mouseY, 60, 60);
  }else{
    
    if(quoNum < 1){
      image(quote1, 530, 320);
    }else if (quoNum < 2){
      image(quote2, 530, 320);
    }else if (quoNum < 3){
      image(quote3, 530, 320);
    }else if (quoNum < 4){
      image(quote5, 530, 320);
    }else if (quoNum < 5){
      image(quote6, 530, 320);
    }
    else if (quoNum < 6){
      image(quote4, 530, 320);
    }else if (quoNum <= 7){
      image(quote7, 530, 320);
    }
    
    image(playAgain, 530, 480);
    image(menuCursor, mouseX, mouseY, 60, 60);
    //text("MouseX: " + mouseX + "      MouseY: " + mouseY, 10, 50);
  }
  
}
//fucntion for when keys are pressed
function keyPressed() {
  
    if (key.toLowerCase() == "w" || key == "ArrowUp") {//if w is pressed
      walkUp = true;//walk up is true
    }
    if (key.toLowerCase() == "a" || key == "ArrowLeft") {//if a is pressed
      walkLeft = true;//walk left is true
    }
    if (key.toLowerCase() == "d" || key == "ArrowRight") {//if d is pressed
      walkRight = true;//walk right is true
    }
    if (key.toLowerCase() == "s" || key == "ArrowDown") {//if s is pressed
      walkDown = true;//walk down is true
    }
 
}
//fucntion for when keys are relesed
function keyReleased() {
  if (key.toLowerCase() == "w" || key == "ArrowUp") {//if w is relesesd
    walkUp = false;//walk up is false
  }
  if (key.toLowerCase() == "a" || key == "ArrowLeft") {//if a is relesesd
    walkLeft = false;//walk left is false
  }
  if (key.toLowerCase() == "d" || key == "ArrowRight") {//if d is relesesd
    walkRight = false;
  }//walk right is false
  if (key.toLowerCase() == "s" || key == "ArrowDown") {//if s is relesesd
    walkDown = false;//walk down is false
  }
  if (key.toLowerCase() == "r" || key.toLowerCase() == "e") {
    ammo = 15;
    relodGun.play();
  }
}//function for when mouse is pressed
function mousePressed() {
  if (sceneType === "menu") {
    //ellipse(668,332,59,59);
    //ellipse(968,332,59,59);
    if (circleButtonClicked(668, 332)) {
      characterStyleSlider -= 1;
    } else if (circleButtonClicked(968, 332)) {
      characterStyleSlider += 1;
    } else if (rectButtonClicked(683, 940, 499, 619)) {
      sceneType = "play"
      }
    
    if (characterStyleSlider < 0) {
      characterStyleSlider = 2;
    } else if (characterStyleSlider > 2) {
      characterStyleSlider = 0;
    }
   
    
    if (characterStyleSlider == 0){
      walkCycle = [walk1, walk2, walk3];
    }else if(characterStyleSlider == 1){
      walkCycle = [s2Walk1, s2Walk2, s2Walk3];
    }else{
      walkCycle = [s3Walk1, s3Walk2, s3Walk3];
    }
  }else if(sceneType === "lost"){
    if(rectButtonClicked(366,697,420,540)){
      sceneType = "play";
    }
  }else if(ammo > 0){
    
        playerCrosshairDisX = mouseX - 530;//find distance between mouse x and center of screen in x
    playerCrosshairDisY = mouseY - 320;//find distance between mouse y and center of screen in y
    playerCrosshairAngle = Math.atan2(playerCrosshairDisY, playerCrosshairDisX);//find angle between player and crosshair using the incerse tan of the 2 distances we just found
    bullets.push(new bulletSpawn(playerX, playerY, playerCrosshairAngle));//push bullets to array

    shootSound.play();//play shoot sound 
    ammo--;
  }else{
    emptyGun.play();
  }
}