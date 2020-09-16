//When the army is carried off, the king of the South will be filled with pride and will slaughter many thousands, yet he will not remain triumphant. 
//
//This page, rather strangely, follows the end page, and represents the four letters of the name of god in the hebrew bible: YHWH. It is meant as a mirror to the babel pages in that it is a point of no return which fills the page with letters

var canvas;
var colMov; 
var letters = ['ה', 'ו', 'ה', 'י', ' '];
var inc = 0;
var incMov = 1;

function windowResized(){

  resizeCanvas(windowWidth, windowHeight);

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  frameRate(5);
  colMov = random(-10, 45);

}

function draw() {

 background(0 + colMov);
 noStroke();
 fill(255);
 textSize(windowWidth/75);

 for(var i = 0; i < 40; i++){
     for(var j = 0; j < 30; j++){
        var rand = int(random(5));
        text(letters[rand], (i * windowWidth/40)+5, (j * windowHeight/30)+15)
     }
 }
    
     colMov = random(0, 40)
        if(inc == 35){
         incMov = -1
     }
     
     inc += incMov
     
     if(inc == 0){
         incMov = 1
     }
}