//Create variables here
var runner, runnerImg;
var backgroundImg;

function preload(){
  //load images here
 // runnerImg=loadImage("images/boy.png");
  runnerImg=loadAnimation("images/trex1.png","images/trex3.png","images/trex4.png");
  backgroundImg=loadImage("images/bg1.jpg");
  cloudImage = loadImage("images/cloud.png");
  
}

function setup() {
createCanvas(displayWidth-200,displayHeight-100);

  runner = createSprite(50,180,20,50);
  runner.debug = true;
  runner.addAnimation("running", runnerImg);
  runner.scale = 0.5;
  runner.velocityX=2
}

function draw() {  
  background(backgroundImg);
//   stroke("black")
//   textSize(30)
//   text(mouseX+"   "+mouseY,50,50)


  if(keyIsDown(RIGHT_ARROW)){
    runner.x = runner.x+10;
}

 //moving game camera with trex =>  +500 so that camera is ahead of trex
    //+500 trex seems to be at the left of the screen
   camera.position.x = runner.x+450;
  //  console.log(camera.position.x+" "+camera.position.y+" "+runner.x);
    console.log(camera.position.x+" "+camera.position.y+" "+runner.x);
    //camera.position.y = displayHeight/2;
spawnClouds()
  drawSprites();


}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var cloud = createSprite(runner.x+displayWidth-100,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    //cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = displayWidth/runner.velocityX+30;
    
    //adjust the depth
    // cloud.depth = trex.depth;
    // trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  }
}