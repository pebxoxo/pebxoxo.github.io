//And in the first year of Darius the Mede, I took my stand to support and protect him
//
//This page contains an empty purple page with the roman numerals, to accompany the old english john cage poem page

var canvas;
var img;
var colMov; 
var numerals = ['i.', 'ii.', 'iii.', 'iv.', 'v.', 'vi.', 'vii.', 'viii.', 'ix.', 'x.'];
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
 text(numerals[inc], windowWidth/50, windowHeight/24)
    
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