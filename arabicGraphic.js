//In the third year of Cyrus king of Persia, a revelation was given to Daniel (who was called Belteshazzar). Its message was true and it concerned a great war. The understanding of the message came to him in a vision.
//
//This js file is used as the background for the arabic language page, iterating through the numbers much like the other numeral pages.

var canvas;
var img;
var colMov; 
var numerals3 = ['١.', '٢.', '٣.', '٤.', '٥.', '٦.', '٧.', '٨.', '٩.', '١٠.'];
var inc = 0;
var incMov = 1;

function windowResized(){

  resizeCanvas(windowWidth, windowHeight);

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  frameRate(30);
  colMov = random(-10, 45);

}

function draw() {
 
 background(10, 20, 40 + colMov);
 noStroke();
 fill(255);
 textSize(windowWidth/75);
 text(numerals3[inc], windowWidth/50, windowHeight-30)
    
 if(frameCount%3 == 0){
     
     colMov = random(0, 15)
        if(inc == 9){
         incMov = -1
     }
     
     inc += incMov
     
     if(inc == 0){
         incMov = 1
     }
 }
}