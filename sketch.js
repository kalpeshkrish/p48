const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var p1,p2,p3,p4,p5,p6,p7,pin_img;
var lane_img,lane,bowl_img,bowl;
var winImg,loseImg;
var count=0;
var score=0;
var angle=1;
var drag=0;
var PLAY=1;
var END=0;
var gameState=PLAY;
var b1Imag,b2Img;
var yl,yw;

function preload(){
lane_img=loadImage("court.png");
pimg=loadImage("pin.png");
bimg=loadImage("bowl.png");
pindown=loadImage("pinDown1.png");
winImg=loadImage("youwin.jpg");
loseImg=loadImage("youlose.jpg");
b1Imag=loadSound("b1.mp3");
b2Img=loadSound("strike+2.mp3");
yl=loadSound("lose.mp3");
//yw=loadSound("win.mp3")
}
function setup(){
createCanvas(displayWidth,displayHeight-147);
engine=Engine.create();
world=engine.world;


lane=createSprite(700,350);
lane.addImage(lane_img);
lane.scale=0.11;

lose=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
lose.addImage(loseImg);
lose.visible=false;

win=createSprite(displayWidth/2,displayHeight/2-100,displayWidth,displayHeight);
win.addImage(winImg);
win.visible=false;

pin1=createSprite(635,60);
pin1.addImage(pimg);
pin1.scale=0.13;

pin2=createSprite(695,60);
pin2.addImage(pimg);
pin2.scale=0.13;

pin3=createSprite(570,45);
pin3.addImage(pimg);
pin3.scale=0.13;

pin4=createSprite(790,45);
pin4.addImage(pimg);
pin4.scale=0.15;

pin5=createSprite(535,45);
pin5.addImage(pimg);
pin5.scale=0.15;

pin6=createSprite(755,45);
pin6.addImage(pimg);
pin6.scale=0.13;

//pin7=createSprite(515,60);
//pin7.addImage(pimg);
//pin7.scale=0.15;

pin8=createSprite(665,95);
pin8.addImage(pimg);
pin8.scale=0.15;

pin9=createSprite(730,75);
pin9.addImage(pimg);
pin9.scale=0.15;

pin10=createSprite(600,75);
pin10.addImage(pimg);
pin10.scale=0.15;

bowl=createSprite(650,600);
bowl.addImage(bimg);
bowl.scale=0.15;

 b1=createSprite(350,60,200,10);
 b2=createSprite(250,400,10,1000);
 b3=createSprite(1100,400,10,1000);
 b4=createSprite(1000,60,230,10);



Engine.run(engine);
}
function draw(){
   
    background("lightyellow");
    textSize(35)
   fill("orange")
   text("Score  " + score, width-300, 50)
    if(gameState===PLAY){
   
   
    bowl.rotation=angle;
    angle=angle+2;
   
    if(bowl.y<30){
      bowl.visible=false;

    }
   if(pin1.y<20){
      pin1.visible=false;
   }
   if(pin2.y<20){
      pin2.visible=false;

      }
   if(pin3.y<20){
      pin3.visible=false;
   
      }
   if(pin4.y<20){
      pin4.visible=false;
   
      }
   if(pin5.y<20){
        pin5.visible=false;
              
                  }
   if(pin6.y<0){
     pin6.visible=false;
   }
   /*if(pin7.y<20){
      pin7.visible=false;
   }*/
   if(pin8.y<20){
      pin8.visible=false;

   }
   if(pin9.y<20){
      pin9.visible=false;
   }
   if(pin10.y<20){
      pin10.visible=false;
   }
   if(bowl.isTouching(pin1)){
      bowl.y=pin1.y+100;
      bowl.velocityY=-2;
      bowl.velocityX=0;
      pin1.addImage(pindown);
      pin1.velocityY=-3;
      b2Img.play();
      count++;
      score+=10;
   }
   if(bowl.isTouching(pin2)){
      bowl.y=pin2.y+100;
      bowl.velocityY=-2;
      bowl.velocityX=0;
      pin2.addImage(pindown);
      pin2.velocityY=-3;
      b2Img.play();
      count++;
      score+=10;
}
   if(bowl.isTouching(pin3)){
      bowl.y=pin3.y+100;
      bowl.velocityY=-2;
      bowl.velocityX=0;
      pin3.addImage(pindown);
      pin3.velocityY=-3;
      b2Img.play();
      count++;
      score+=10;
   }
   if(bowl.isTouching(pin4)){
      bowl.y=pin4.y+100;
      bowl.velocityY=-2;
      bowl.velocityX=0;
      pin4.addImage(pindown);
      pin4.velocityY=-3;
      b2Img.play();
      count++;
      score+=10;
   }
   if(bowl.isTouching(pin5)){
      bowl.y=pin5.y+100;
      bowl.velocityY=-2;
      bowl.velocityX=0;
      pin5.addImage(pindown);
      pin5.velocityY=-3;
      b2Img.play();
      count++;
      score+=10;
      if(pin5.isTouching(pin3)){
         pin3.addImage(pindown);
         pin3.velocityY=-3;
         score+=10;
         b2Img.play();
      }
      
   }
  if(bowl.isTouching(pin6)){
      bowl.y=pin6.y+100;
      bowl.velocityY=-2;
      bowl.velocityX=0;
      pin6.addImage(pindown);
      pin6.velocityY=-3;
      count++;
      b2Img.play();
      score+=10;
   }
   /* if(bowl.isTouching(pin7)){
      bowl.y=pin7.y+100;
      bowl.velocityY=-2;
      bowl.velocityX=0;
      pin7.addImage(pindown);
      pin7.velocityY=-3;
      count++;
   }*/
   if(bowl.isTouching(pin8)){
      bowl.y=pin8.y+100;
      bowl.velocityY=-2;
      bowl.velocityX=0;
      pin8.addImage(pindown);
      pin8.velocityY=-3;
      b2Img.play();
      count++;
      score+=10;
      if(pin8.isTouching(pin1)){
         pin1.addImage(pindown);
         pin1.velocityY=-3;
         score+=10;
         b2Img.play();
      }
   }
   if(bowl.isTouching(pin9)){
      bowl.y=pin9.y+100;
      bowl.velocityY=-2;
      bowl.velocityX=0;
      pin9.addImage(pindown);
      pin9.velocityY=-3;
      count++;
      score+=10;
      b2Img.play();
      if(pin9.isTouching(pin6)){
         pin6.addImage(pindown);
         pin6.velocityY=-3;
         score+=10;
         b2Img.play();
      }
      if(pin9.isTouching(pin2)){
         pin2.addImage(pindown);
         pin2.velocityY=-3;
         score+=10;
         b2Img.play();
      }
   }
   if(bowl.isTouching(pin10)){
      bowl.y=pin10.y+100;
      bowl.velocityY=-2;
      bowl.velocityX=0;
      pin10.addImage(pindown);
      pin10.velocityY=-3;
      count++;
      score+=10;
      b2Img.play();
      if(pin10.isTouching(pin3)){
         pin3.addImage(pindown);
         pin3.velocityY=-3;
         score+=10;
         b2Img.play();
      }
      if(pin10.isTouching(pin1)){
         pin1.addImage(pindown);
         pin1.velocityY=-3;
         score+=10;
         b2Img.play();
      }
   }
   
    if(bowl.x>650 && count===0){
             bowl.velocityX+=0.05;
    }
    if(bowl.x<650 && count===0){
   
      
             bowl.velocityX-=0.05;
    }
    if(bowl.isTouching(b1)){
       bowl.velocityX=0;
       bowl.velocityY=0;
       bowl.y=90;
    }
    if(bowl.isTouching(b2)){
      bowl.velocityX=0;
      bowl.velocityY=-3;
   }
   if(bowl.isTouching(b3)){
      bowl.velocityX=0;
      bowl.velocityY=-3;
   }
   if(bowl.isTouching(b4)){
      bowl.velocityX=0;
      bowl.velocityY=0;
   }
   /*if(pin4.isTouching(pin6)){
      pin6.addImage(pindown);
      pin4.velocityY=-3;
      pin6.velocityY=-3;
   }*/
   
   if(pin10.isTouching(pin5)){
      pin5.addImage(pindown);
      pin5.velocityY=-3;
      score+=10;
   }
   /*if(pin7.isTouching(pin5)){
      pin5.addImage(pindown);
      pin5.velocityY=-3;
     
   }*/
   b1.visible=false;
   b2.visible=false;
   b3.visible=false;
   b4.visible=false;

   if(drag===5){
      gameState=END;
   }
   if(score===90){
gameState=END;
   }
}
   else if(gameState===END){
      lane.visible=false;
      pin1.visible=false;
      pin2.visible=false;
      pin3.visible=false;
      pin4.visible=false;
      pin5.visible=false;
      pin6.visible=false;
      pin10.visible=false;
      pin8.visible=false;
      pin9.visible=false;
      bowl.visible=false;
   if(score<90){
   lose.visible=true;
   //yl.play();
   }
   else if(score===90){
      win.visible=true;
   }
  
   }
    drawSprites();
   
}
function mouseDragged() 
{
 
  bowl.x=mouseX;
  bowl.y=mouseY;
  bowl.visible=true;
  }
function mouseReleased(){
  
   
   //bowl.y=bowl.y-300;
   bowl.velocityY=-5;

      b1Imag.play(); 
      drag++;
   
}