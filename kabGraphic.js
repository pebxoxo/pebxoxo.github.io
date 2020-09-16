//He will also seize their gods, their metal images and their valuable articles of silver and gold and carry them off to Egypt. For some years he will leave the king of the North alone.
//
//This js file is much like the the hebrew language page, iterating through the numbers much like the other numeral pages. However it also has a faded cabalistic symbol.

var canvas;
var img;
var colMov; 
var numerals2 = ['א.', 'ב.', 'ג.', 'ד.', 'ה.', 'ו.', 'ז.', 'ח.', 'ט.', 'י.'];
var inc = 0;
var incMov = 1;

function windowResized(){

  resizeCanvas(windowWidth, windowHeight);

}

function preload(){
    
    img = loadImage('imgs/H1.png')
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  frameRate(30);
  colMov = random(-10, 45);

}

function draw() {
 
 image(img, 0, 0, windowWidth, windowHeight)
 fill(0 + colMov, 242);
 rect(0, 0, windowWidth, windowHeight);
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