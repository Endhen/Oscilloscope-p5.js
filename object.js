var x = 0;

function Point(x, y) {
    this.x = x;
    this.y = y;
    this.pSize = 3;

    this.display = function () {
        ellipse(this.x, this.y, this.pSize, this.pSize);
    };
}

function Wave() {
    this.points = []; //(x, y)
    this.shape = 0; //y

    this.create = function () {
        for (x = 0; x < width; x++) {
            this.shape = 50 * sin(x / 50) + 150;
            this.points[x] = new Point(x, this.shape);
        }
    };

    this.display = function () {
        for (x = 0; x < this.points.length; x++) {
            wave.points[x].display();
        }

        //refresh
        if (this.points.length >= 600) {
            this.points.splice(0, 600);
        }
    };
}
