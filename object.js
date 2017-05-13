var x = 0,
    i = 0,
    resolution = 0.5; //display resolution

function Point(x, y) {
    this.x = x;
    this.y = y;
    this.pSize = 3;

    //display points 
    this.display = function () {
        fill(this.x, this.y, 150);
        rect(this.x, this.y, this.pSize/2, this.pSize*5);
    };
}


function Harmonic(freq, amp, phase) {

    this.freq = freq;
    this.amp = amp;
    this.phase = phase;
    this.x = 0;
    this.shape = []; // contains all 'y' values

    //define y
    this.function = function (x) {
        var y = this.amp * sin((x / this.freq) + this.phase);

        return y;
    };

    //fill this.shape with 'y' values
    this.createHarm = function () {
        for (this.x; this.x < (width / resolution); this.x = this.x + resolution) {
            this.shape[this.x] = this.function(this.x); // = y
        }
    };
}


function Wave() {
    this.spectre = []; //timbre -> contains all input harmonic objects
    this.shape = []; //contains all 'y' output final values


    //------------ Inner functions -------------

    this.addHarmonic = function (freq, amp, phase) {
        //init
        if (this.spectre.length > 0) {
            this.spectre = [];
        }

        var harm = new Harmonic(freq, amp, phase);
        harm.createHarm();

        this.spectre.push(harm);
    };

    this.initShape = function () {
        for (i = 0; i < (width / resolution); i = i + resolution) {
            this.shape[i] = 0;
        }
    };

    //-------------------------------------------

    this.defineHarm = function (nbrHarm, freq, amp, phase) {
        for (i = 0; i < nbrHarm; i++) {
            this.addHarmonic(freq, amp, phase);
        }

        //Feedback
        //console.log(this.spectre);
    };



    this.compilHarm = function () {
        
        //init
        if (isNaN(this.shape[0])) {
            this.initShape();
            console.log("init !");
        }


        //Compil all 'y' values
        for (i = 0; i < this.spectre.length; i++) {

            //select an harmonic object
            var spectre = this.spectre[i];

            //add all y values of this harmonic object to this.shape
            for (x = 0; x < (width / resolution); x = x + resolution) {
                this.shape[x] = this.shape[x] + spectre.shape[x];
            }
        }

        //Feedback
        //console.log("> New shape : ", this.shape.length);
    };

};


//======= Output ==========

function Display() {
    this.points = []; //contains all point objects


    this.majShape = function (wave) {
        var input = wave;

        //instanciate one point for all 'y' and 'x' values
        for (x = 0; x < (width / resolution); x = x + resolution) {
            this.points[x] = new Point(x, input.shape[x] + 150);
        }

        //refresh
        if (this.points.length > (width / resolution)) {
            this.points.splice(0, (width / resolution));
        }
    };

    //display all the points objects
    this.on = function () {
        for (x = 0; x < this.points.length; x = x + resolution) {
            this.points[x].display();
        }
    };
}



function Controller(newWave) {
    this.openDisplay = false;
    this.freqMod = createSlider(1, 100, 2);
    this.ampMod = createSlider(0, 20, 1);
    this.phaseMod = createSlider(0, 100, 32);
    this.state;
    
    this.setUp = function () {
        this.freqMod;
        this.ampMod;
        this.phaseMod;
    }
    
    this.display = function () {
        this.state.html("freq : " + this.freqMod.value()  + "<br/>amp : " + this.ampMod.value() + "<br/>phase : " + this.phaseMod.value());
    }
}
