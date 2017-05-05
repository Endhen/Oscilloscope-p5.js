var inc,
    i,
    osc = [],
    wave,
    mouseValue;

function setup() {
    createCanvas(600, 300);
    frameRate(200);

}

function draw() {
    background(10);
    fill(255);
    noStroke();
    
    mouseValueY = map(mouseY, 0, 700, -100, 100);
    mouseValueX = map(mouseX, 0, 700, -100, 100);
    
    for (i = 0; i < width; i++) {
        wave = mouseValueY * sin(i / mouseValueX) + 150;
        osc.push(new Point(wave, i));
    }
    
    //display
    for (i = 0; i < osc.length; i++) {
        osc[i].display();
    }
    
    //refresh
    if (osc.length >= 600) {
        osc.splice(0, 600);
    }
}
