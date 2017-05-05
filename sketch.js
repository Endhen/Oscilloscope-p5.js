var inc,
    i,
    osc = [],
    wave;

function setup() {
    createCanvas(600, 300);
    

}

function draw() {
    background(10);
    fill(255);
    noStroke();
    
    
    for (i = 0; i < width; i++) {
        wave = 10 * sin(i / 20) + 150;
        osc.push(new Point(wave, i));
    }
    
    for (i = 0; i < osc.length; i++) {
        osc[i].display();
    }
}
