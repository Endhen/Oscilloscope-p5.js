var x = 0,
    i = 0;

function Point(x, y) {
    this.x = x;
    this.y = y;
    this.pSize = 3;
    
    //display points 
    this.display = function () {
        ellipse(this.x, this.y, this.pSize, this.pSize);
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

    //fill this.shape
    this.createHarm = function () {
        for (this.x = 0; this.x < width; this.x++) {
            this.shape[this.x] = this.function(this.x);
        }
        
        this.y = 0;
    };
}


function Wave() {
    this.spectre = []; //timbre -> contains all hramonic objects
    this.shape = []; //contains all 'y' values


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
        for (i = 0; i < width; i++) {
            this.shape[i] = 0;
        }
    };

    //-------------------------------------------

    this.defineHarm = function (nbrHarm, freq, amp, phase) {
        for (i = 0; i < nbrHarm; i++) {
            this.addHarmonic(freq, amp, phase);
        }

        //Feedback
        console.log("> ", nbrHarm, " defined harmonics, freq : ", amp, " / amp : ", amp, " / phase : ", phase);
    };



    this.compilHarm = function () {
        
        if (this.shape.length < 100) {
            this.initShape();
        }


        //Compil all 'y' values
        for (i = 0; i < this.spectre.length; i++) {

            //select an harmonic object
            var spectre = this.spectre[i];

            //add all y values of this harmonic object to this.shape
            for (x = 0; x < width; x++) {
                this.shape[x] = this.shape[x] + spectre.shape[x];
            }
        }

        //Feedback
        console.log("> Harmoniques compilés : ", this.shape);
    };

};


//======= Output ==========

function Display() {
    this.points = []; //contains all point objects


    this.majShape = function (wave) {
        var input = wave;
        
        //instanciate one point for all 'y' and 'x' values
        for (x = 0; x < width; x++) {
            this.points[x] = new Point(x, input.shape[x] + 150);
        }
        
        //refresh
        if (this.points.length > 600) {
            this.points.splice(0, 600);
        }
    };

    //display all the points objects
    this.on = function () {
        for (x = 0; x < this.points.length; x++) {
            this.points[x].display();
        }
    };
}
