var tom1 , tom2 , tom3 ;
var jerry1 , jerry2 , jerry3; 
var bgImg
var tom, jerry ;



function preload() {
    //load the images
    bgImg = loadImage("images/garden.png");
    tom1 = loadAnimation("images/cat1.png");
    tom2 = loadAnimation("images/cat2.png" ,"images/cat3.png")
    jerry1 = loadAnimation("images/mouse1.png");
    jerry2 = loadAnimation("images/mouse2.png" , "images/mouse3.png");
    tom3 = loadAnimation("images/cat4.png");
    jerry3 = loadAnimation("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //creating tom and jerry sprites 
    tom = createSprite(800,600,50,20);
    tom.addAnimation("tom", tom1 );
    tom.scale = 0.15;
        
    jerry = createSprite(150,600,50,20);
    jerry.addAnimation("jerry", jerry1);
    jerry.scale = 0.15;

     
}

function draw() {
    //create background with img 
    background(bgImg);
    
    // a condition to make tom and jerry collide and change the animation
    if(tom.x - jerry.x < tom.width/2 - jerry.width/2){
        tom.addAnimation("tom", tom3 );
        tom.velocityX = 0;
        tom.x = 230;
        jerry.addAnimation("jerry", jerry3);
    }
    // drawsprites so it can be seen 
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation 
  if(keyCode === LEFT_ARROW){
    jerry.addAnimation("jerry", jerry2);
    jerry.frameDelay = 25;
    tom.addAnimation("tom", tom2);
    tom.scale = 0.15;
    tom.velocityX = -5;
  }

  

}
