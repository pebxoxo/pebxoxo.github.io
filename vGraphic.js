//“In those times many will rise against the king of the South. Those who are violent among your own people will rebel in fulfillment of the vision, but without success. 
//
//This page produces a psychedelic style vulture background effect, much like the one used in gateway.html

var canvas;
var img = [];
var numerals = ['i.', 'ii.', 'iii.', 'iv.', 'v.', 'vi.', 'vii.', 'viii.', 'ix.', 'x.', 'xi.', 'xii.', 'xiii.', 'xiv.', 'xv.', 'xvi.', 'xvii.', 'xviii.', 'xix.', 'xx.', 'xxi.', 'xxii.', 'xxiii.', 'xxiv.', 'xxv.', 'xxvi.', 'xxvii.', 'xxviii', 'xxix.', 'xxx.', 'xxxi.', 'xxxii.', 'xxxiii.', 'xxxiv.', 'xxxv.', 'xxxvi.'];
var inc = 0;
var incMov = 1;
var colMov;

function windowResized(){

  resizeCanvas(windowWidth, windowHeight);

}

function preload(){
    
    for(var i = 0; i < 5; i++){
        
        img[i] = loadImage('imgs/V' + (i+1) + '.jpg')
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
 fill(0);
 textSize(windowWidth/75);
 text(numerals[inc], windowWidth/50, windowHeight/24)


 if(frameCount%3 == 0){
     
     colMov = random(-10, 30)
     
     if(inc == 3){
         incMov = -1
     }
     
     inc += incMov
     
     if(inc == 0){
         incMov = 1
     }
 }
}