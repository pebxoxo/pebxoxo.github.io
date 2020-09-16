//Then the king of the South will march out in a rage and fight against the king of the North, who will raise a large army, but it will be defeated. 
//
//This page is for when the encryption puzzle gets answered incorrectly, and the owl suddenly disappears from the perch of the homepage

var canvas;
var img = [];
var numerals = ['i.', 'ii.', 'iii.'];
var inc = 0;
var incMov = 1;
var colMov;

function windowResized(){

  resizeCanvas(windowWidth, windowHeight);

}

function preload(){
    
    for(var i = 0; i < 3; i++){
        
        img[i] = loadImage('imgs/O' + (i+34) + '.png')
    }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  frameRate(30);
  colMov = random(-10, 45)

}

function draw() {

 background(10, 20, 40 + colMov);    
 rectMode(CENTER);
 image(img[inc], 0, 0, windowWidth, windowHeight)
 
 noStroke();
 fill(255);
 textSize(windowWidth/75);
 text(numerals[inc], windowWidth/50, windowHeight/24)


 if(frameCount%3 == 0){
     
     colMov = random(-10, 30)
     
     if(inc == 2){
         incMov = -1
     }
     
     inc += incMov
     
     if(inc == 0){
         incMov = 1
     }
 }
}
