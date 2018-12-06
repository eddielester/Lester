var cat;
var feed = [];
var numFood = 10;

var a = [1,2,3];

function setup() {
    createCanvas(640, 480);
    
}

function draw() {
    background('#52BE80');
    
    var x = mouseX;
    var y = mouseY;
    
    
    //face
    fill('#141313');
    ellipse(x, y, 200, 240);
    
    //nose
    stroke('#DCDCDC');
    strokeWeight(3);
    line(x-15, y+15, x+15, y+15);
    
    stroke('#DCDCDC');
    strokeWeight(3);
    line(x-25, y, x-15, y+15);
     
    stroke('#DCDCDC');
    strokeWeight(3);
    line(x+25 ,y, x+15 , y+15);
    
    //eyeLeft
    fill('#FFFFFF');
    ellipse(x+42, y-26, 64 ,40);
    
    //pupilLeft
    fill('#DCDCDC');
    ellipse(x+42, y-26, 30 ,30);
    
    //eyeRight
    fill('#FFFFFF');
    ellipse(x-42, y-26, 64 ,40);
    
    //pupilRight
    fill('#DCDCDC');
    ellipse(x-42, y-26, 30 ,30);
    
    //earLeft
    fill('#250232');
    push();
    triangle(x-70, y-70, x-70, y-110, x-40, y-90);
    pop();
    
    //earRight
    fill('#250232');
    push();
    triangle(x+70, y-70, x+70, y-110, x+40, y-90);
    pop();
    
    //mouth
    fill('#DCDCDC');
    quad(x-25, y+35, x-15, y+50, x+15, y+50, x+25, y+35);
    
    stroke('#DCDCDC');
    strokeWeight(3);
    line(x-70,y+10, x-40,y+20);
    
    stroke('#DCDCDC');
    strokeWeight(3);
    line(x+70,y+10, x+40, y+20);
    
    stroke('#DCDCDC');
    strokeWeight(3);
    line(x-40, y+20, x-30, y+80);
    
    stroke('#DCDCDC');
    strokeWeight(3);
    line(x+40, y+20, x+30, y+80);
}