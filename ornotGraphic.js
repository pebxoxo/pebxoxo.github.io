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
  frameRate(30);
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
     print(rand)
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