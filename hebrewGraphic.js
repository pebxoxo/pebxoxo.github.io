//“One from her family line will arise to take her place. He will attack the forces of the king of the North and enter his fortress; he will fight against them and be victorious. 
//
//This js file is used as the background for the hebrew language page, iterating through the numbers much like the other numeral pages.

var canvas;
var img;
var colMov; 
var numerals2 = ['א.', 'ב.', 'ג.', 'ד.', 'ה.', 'ו.', 'ז.', 'ח.', 'ט.', 'י.'];
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
 text(numerals2[inc], windowWidth-40, windowHeight-30)
    
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