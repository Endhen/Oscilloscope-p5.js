var i,
    fm = 0,
    am = 0,
    pm = 0,
    button,
    controller,
    wave = new Wave(),
    display = new Display();

function setup() {
    createCanvas(1300, 600);
    frameRate(700);
    controller = new Controller();
    controller.setUp();
    controller.openDisplay = true;
    //button = createButton("Display wave");
    //button.mousePressed(exe);
}

function exe() {
    
    //create one harm
    wave.defineHarm(1, (controller.freqMod.value() + fm), (controller.ampMod.value() + am), (controller.phaseMod.value() + pm));
    
    //compil it into wave.shape
    wave.compilHarm();
    
}

function draw() {
    background(20);
    noStroke();
    
    exe();
    pm += 0.1;
    
    //controller.display();
    
    if (controller.openDisplay === true) {
        display.majShape(wave); //maj this.point
        display.on();
    }
}


