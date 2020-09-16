//“Now then, I tell you the truth: Three more kings will arise in Persia, and then a fourth, who will be far richer than all the others. When he has gained power by his wealth, he will stir up everyone against the kingdom of Greece. 
//
//This file contains the image of carrion, of rotting flesh, accompanied by a red colour ... for obvious reasons.
//Used in carrion page

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
    
    img = loadImage('imgs/C1.jpg')
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
 fill(20 + colMov, 0, 0, 200);
 rect(0, 0, windowWidth, windowHeight);
 noStroke();
 fill(255);
 textSize(windowWidth/75);
 text(numerals[inc], windowWidth/50, windowHeight/24)
    
 if(frameCount%4 == 0){
     
     colMov = random(0, 15)
        if(inc == 35){
         incMov = -1
     }
     
     inc += incMov
     
     if(inc == 0){
         incMov = 1
     }
 }
}