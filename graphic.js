//After some years, they will become allies. The daughter of the king of the South will go to the king of the North to make an alliance, but she will not retain her power, and he and his power will not last. In those days she will be betrayed, together with her royal escort and her father and the one who supported her. 
//This is the homepage graphic, containing the luzbone owl itself

//Declare global variables
var canvas;
var img = [];
var inc = 0;
var incMov = 1;
var colMov;
//Fill array with roman numerals 1-36
var numerals = ['i.', 'ii.', 'iii.', 'iv.', 'v.', 'vi.', 'vii.', 'viii.', 'ix.', 'x.', 'xi.', 'xii.', 'xiii.', 'xiv.', 'xv.', 'xvi.', 'xvii.', 'xviii.', 'xix.', 'xx.', 'xxi.', 'xxii.', 'xxiii.', 'xxiv.', 'xxv.', 'xxvi.', 'xxvii.', 'xxviii', 'xxix.', 'xxx.', 'xxxi.', 'xxxii.', 'xxxiii.', 'xxxiv.', 'xxxv.', 'xxxvi.'];

// Allow for dynamic window resizing
function windowResized(){

  resizeCanvas(windowWidth, windowHeight);

}

// Fill array with different frames of 'flipbook'
function preload(){
    
    for(var i = 0; i < 36; i++){
        
        img[i] = loadImage('imgs/O' + (i+1) + '.png')
    }
}

// Setup the canvas further for dynamic sizing, establish lower framerate (consistent throughout website for a more flipbook, lo-fi appearance)
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  frameRate(30);
  colMov = random(-10, 45)

}

//Iterate through flipboook images and then reverse, also alter colour slightly every frame for the slightly flashing effect achieved in the graphics across the website
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
     
     if(inc == 35){
         incMov = -1
     }
     
     inc += incMov
     
     if(inc == 0){
         incMov = 1
     }
 }
}

