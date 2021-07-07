var tom,jerry,backgroundImg,cat1Img,cat2Img,cat3Img,cat4Img
var mouse1Img,mouse2Img,mouse3Img,mouse4Img
function preload() {


    //load the images here
   backgroundImg=loadImage("garden.png");
   cat1Img=loadImage("cat1.png");
   cat2Img=loadAnimation("cat2.png","cat3.png");
    cat4Img=loadImage("cat4.png")
   mouse1Img=loadImage("mouse1.png");
   mouse2Img=loadAnimation("mouse2.png","mouse3Img");
   mouse4Img=loadImage("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
var tom =createSprite(600,700,50,50);
tom.addAnimation("waking", cat2Img);
tom.scale=0.5;

  

var jerry=createSprite(300,700,50,50);
jerry.addAnimation("teasing", mouse2Img);
jerry.scale=0.5;
}


function draw() {

    background(backgroundImg);

   

    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<=tom.width/2+jerry.width/2 )
      {
        tom.changeAnimation(cat4Img);
        jerry.changeAnimation(mouse4Img);
      }
      
      

   
    drawSprites();
}
 function keyPressed() {
   if(keyCode === LEFT_ARROW){
   tom.changeAnimation(cat2Img);
   jerry.changeAnimation(mouse2Img);
   }
 }


