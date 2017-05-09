var i,
    finalWave = new Wave(),
    display = new Display(),
    openDisplay = false;

function setup() {
    createCanvas(600, 300);
    frameRate(200);
}

function draw() {
    background(10);
    fill(255);
    noStroke();
    
    if (openDisplay === true) {
        display.majShape(finalWave); //maj this.point
        display.on();
    }
}

function mousePressed() {
    finalWave.defineHarm(1, mouseX, 20, mouseY); // (nbr, freq, amp, phase)
    finalWave.compilHarm();
    openDisplay = true;
}
