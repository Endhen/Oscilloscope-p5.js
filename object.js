var x = 0,
    i = 0;

function Point(x, y) {
    this.x = x;
    this.y = y;
    this.pSize = 3;

    this.display = function () {
        ellipse(this.x, this.y, this.pSize, this.pSize);
    };
}


function Harmonic(freq, amp, phase) {

    this.freq = freq; // Pour une freq elevé -> mettre un petit nombre
    this.amp = amp;
    this.phase = phase;
    this.x = 0;
    this.shape = []; // contient tout les y

    this.function = function (x) {
        var y = this.amp * sin((x / this.freq) + this.phase);

        return y;
    };

    //rempli this.shape
    this.createHarm = function () {
        for (this.x = 0; this.x < width; this.x++) {
            this.shape[this.x] = this.function(this.x);
        }
        
        this.y = 0;
    };
}


function Wave() {
    this.spectre = []; //timbre -> essemble des harm
    this.shape = []; //enssembles des harm.shape


    //------------Inner functions --------------

    this.addHarmonic = function (freq, amp, phase) {
        //init
        if (this.spectre.length > 0) {
            this.spectre = [];
            console.log("Spectre réinitialisé");
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
        console.log("> ", nbrHarm, " harmoniques définies, freq : ", amp, " / amp : ", amp, " / phase : ", phase);
    };



    this.compilHarm = function () {
        console.log("Shape initale : ", this.shape);
        
        //met les valeures a zéro
        if (this.shape.length < 100) {
            this.initShape();
        }


        //Compil toutes les harmoniques
        for (i = 0; i < this.spectre.length; i++) {

            //prend l'harmonique
            var spectre = this.spectre[i];

            //ajoute l'harmonique a this.shape
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
    this.points = []; //essemble de tout les points


    this.majShape = function (wave) {
        var input = wave;
        
        //Attrribution d'un point pour chaques valeurs y
        for (x = 0; x < width; x++) {
            this.points[x] = new Point(x, input.shape[x] + 150);
        }
        
        //refresh
        if (this.points.length > 600) {
            this.points.splice(0, 600);
        }
    };

    //affiche les points
    this.on = function () {
        
        for (x = 0; x < this.points.length; x++) {
            this.points[x].display();
        }
    };
}
