function setup() {
    createCanvas(750,750);
    background('#303030');
}

function draw() {
    strokeWeight(0);   
    fill('#F1E9D2')
    beginShape();       //shape-left
        vertex(170,0);              //p1: top left
        vertex(0,375);              //p2: bottom left
        vertex(200,375);            //p3: bottom middle
        vertex(200,200);            //p4: middle left
        vertex(300,200);            //p5: middle right
        vertex(375,375);            //p6: bottom right
        vertex(540,0);              //p7: top right
    endShape(CLOSE);
    
    translate(width,height);
    rotate(PI);
    
    beginShape();      //shape-right
        vertex(170,0);              //p1: top left
        vertex(0,375);              //p2: bottom left
        vertex(200,375);            //p3: bottom middle
        vertex(200,200);            //p4: middle left
        vertex(300,200);            //p5: middle right
        vertex(375,375);            //p6: bottom right
        vertex(540,0);              //p7: top right
    endShape(CLOSE);
}
