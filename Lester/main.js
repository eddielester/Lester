function setup() {
    createCanvas(640, 480);
}

function draw() {
    background('#52BE80');
    
    var x = width/2;
    var y = height/2;
    
    
    //face
    fill('#141313');
    ellipse(x, y, 200, 240);
    
    //nose
    stroke('#DCDCDC');
    strokeWeight(3);
    line(305,260, 335,260);
    
    stroke('#DCDCDC');
    strokeWeight(3);
    line(295,245, 305,260);
    
    stroke('#DCDCDC');
    strokeWeight(3);
    line(345,245, 335,260);
    
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
    triangle(250,160, 280, 140, 250, 110);
    pop();
    
    //earRight
    fill('#250232');
    push();
    triangle(350,140, 380, 160, 380, 110);
    pop();
    
    //mouth
    fill('#DCDCDC');
    quad(295, 280, 305, 295, 335, 295, 345, 280);
    
    stroke('#DCDCDC');
    strokeWeight(3);
    line(250,250, 280,260);
    
    stroke('#DCDCDC');
    strokeWeight(3);
    line(390,250, 360,259);
    
    stroke('#DCDCDC');
    strokeWeight(3);
    line(280,260, 290,300);
    
    stroke('#DCDCDC');
    strokeWeight(3);
    line(360,259, 350, 300);
}