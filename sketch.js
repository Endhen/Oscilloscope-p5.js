var i,
    button,
    controller,
    wave = new Wave(),
    display = new Display();

function setup() {
    createCanvas(600, 300);
    frameRate(200);
    controller = new Controller();
    controller.setUp();
    button = createButton("Display wave");
    button.mousePressed(exe);
}

function exe() {
    
    //create one harm
    wave.defineHarm(1, controller.freqMod.value(), controller.ampMod.value(), controller.phaseMod.value());
    
    //compil it into wave.shape
    wave.compilHarm();
    
    controller.openDisplay = true;
}

function draw() {
    background(10);
    fill(255);
    noStroke();
    
    controller.display();
    
    if (controller.openDisplay === true) {
        display.majShape(wave); //maj this.point
        display.on();
    }
}


