var canvas;
var colMov; 
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'y', 'z', '.', ',', ' ', ' '];
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
  
}

function draw() {

 background(0 + colMov);
 noStroke();
 fill(255);
 textSize(windowWidth/100);

 for(var i = 0; i < 80; i++){
     for(var j = 0; j < 40; j++){
        var rand = int(random(25));
        text(letters[rand], (i * windowWidth/80)+10, (j * windowHeight/40)+10)
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
