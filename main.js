var cat;
var feed = [];
var numFood = 10;
var count = 0;



function setup() {
    createCanvas(740, 480);
    cat = new Cat();
    
    for(var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background('#52BE80');
    cat.display();
    
    for(var i = 0; i < feed.length; i++){
        feed[i].display();
    }
}

function mousePressed(){
    cat.eat();

}

function Food(x,y) {
    
    this.x = x;
    this.y = y;
    this.color = color(0, 255, 25);
    this.foodSize = 50;
    
    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.foodSize, this.foodSize);
    }
}

function Cat(){
    var x = mouseX;
    var y = mouseY;

    this.getDistance = function(other){
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    }
    
    this.eat = function() {
        for(var i = 0; i < numFood; i++) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = 100;
            if(r1 + r2 > d) {
                feed.splice(i, 1);
                feed.push(new Food(random(width), random(height)));
                count ++;
            }
        }
    }
    
    

        
    
    this.display = function(){
        fill('#F30C0C')
        textSize(20);
        text("Score: " + count, 20, 20);
        
        x = mouseX;
        y = mouseY;
        
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
        
        
        
        fill('#FFFFFF');
        ellipse(x+42, y-26, 64 ,40);
        
        //pupilLeft
        if(mouseIsPressed){
            fill('#6A1FDA');
        } else {
            fill('#DCDCDC');
        }
        
        ellipse(x+42, y-26, 30 ,30);
        
        //eyeRight
        fill('#FFFFFF');
        ellipse(x-42, y-26, 64 ,40);
        
        //pupilRight
        if(mouseIsPressed){
            fill('#6A1FDA');
        } else {
            fill('#DCDCDC');
        }
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
        
        //Lines
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
    
}


