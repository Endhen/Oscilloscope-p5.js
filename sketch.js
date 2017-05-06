var i,
    wave = new Wave(),
    mouseValue;

function setup() {
    createCanvas(600, 300);
    frameRate(200);
}

function draw() {
    background(10);
    fill(255);
    noStroke();

    //mouseValueY = map(mouseY, 0, 700, -100, 100);
    //mouseValueX = map(mouseX, 0, 700, -100, 100);
    
    
    wave.create();
    wave.display();
    
}
