//For the king of the North will muster another army, larger than the first; and after several years, he will advance with a huge army fully equipped. 
//
//This graphic is used for the encryption puzzle page, gateway.html

var canvas;
var colMov 
var numerals = ['i.', 'ii.', 'iii.', 'iv.', 'v.', 'vi.', 'vii.', 'viii.', 'ix.', 'x.', 'xi.', 'xii.', 'xiii.', 'xiv.', 'xv.', 'xvi.', 'xvii.', 'xviii.', 'xix.', 'xx.', 'xxi.', 'xxii.', 'xxiii.', 'xxiv.', 'xxv.', 'xxvi.', 'xxvii.', 'xxviii', 'xxix.', 'xxx.', 'xxxi.', 'xxxii.', 'xxxiii.', 'xxxiv.', 'xxxv.', 'xxxvi.'];
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
     
     colMov = random(-10, 30)
        if(inc == 35){
         incMov = -1
     }
     
     inc += incMov
     
     if(inc == 0){
         incMov = 1
     }
 }
}

