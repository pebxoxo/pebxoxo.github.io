//At that time I, Daniel, mourned for three weeks. 
//
//This page produces a recreation of a whole book from Borge's famous library of Babel, 410 pages of a possible combination of 25 total characters (or lack thereof). Used in the various library of sbabel pages

var canvas;
var colMov; 
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'y', 'z', '.', ',', ' ', ' '];
var pageNo = [];
var inc = 0;
var incMov = 1;

function windowResized(){

  resizeCanvas(windowWidth, windowHeight);

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  frameRate(1);
  colMov = random(-10, 45);
  
  for(var i = 0; i < 410; i++){
      pageNo.push(i+1+'.')
  }
}

function draw() {

 background(0 + colMov);
 noStroke();
 fill(255);
 textSize(windowWidth/120);

 for(var i = 0; i < 80; i++){
     for(var j = 0; j < 40; j++){
        var rand = int(random(25));
        text(letters[rand], (i * (windowWidth-10)/80)+10, (j * (windowHeight-10)/40)+20)
     }
 }

textSize(windowWidth/110);
text(pageNo[inc], 10, 10)
    
     colMov = random(0, 40)
        if(inc == 410){
         incMov = -1
     }
     
     inc += incMov
     
     if(inc == 0){
         incMov = 1
     }

}
