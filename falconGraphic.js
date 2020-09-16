//After he has arisen, his empire will be broken up and parceled out toward the four winds of heaven. It will not go to his descendants, nor will it have the power he exercised, because his empire will be uprooted and given to others.
//
//This file contains the distorted image of a falcon for use on the falcony page

var canvas;
var img;
var colMov; 
var numerals = ['i.', 'ii.', 'iii.', 'iv.', 'v.', 'vi.', 'vii.', 'viii.', 'ix.', 'x.', 'xi.', 'xii.', 'xiii.', 'xiv.', 'xv.', 'xvi.', 'xvii.', 'xviii.', 'xix.', 'xx.', 'xxi.', 'xxii.', 'xxiii.', 'xxiv.', 'xxv.', 'xxvi.', 'xxvii.', 'xxviii', 'xxix.', 'xxx.', 'xxxi.', 'xxxii.', 'xxxiii.', 'xxxiv.', 'xxxv.', 'xxxvi.'];
var inc = 0;
var incMov = 1;

function windowResized(){

  resizeCanvas(windowWidth, windowHeight);

}

function preload(){
    
    img = loadImage('imgs/F1.jpg')
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  frameRate(30);
  colMov = random(-10, 45);

}

function draw() {
 
 //rectMode(CENTER);
 image(img, 0, 0, windowWidth, windowHeight)
 fill(0 + colMov, 200);
 rect(0, 0, windowWidth, windowHeight);
 noStroke();
 fill(255);
 textSize(windowWidth/75);
 text(numerals[inc], windowWidth/50, windowHeight/24)
    
 if(frameCount%3 == 0){
     
     colMov = random(0, 30)
        if(inc == 35){
         incMov = -1
     }
     
     inc += incMov
     
     if(inc == 0){
         incMov = 1
     }
 }
}