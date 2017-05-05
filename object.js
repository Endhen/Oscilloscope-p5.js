function Point(x, y) {
    this.x = x;
    this.y = y;
    this.pSize = 3;
    
    this.display = function() {
        ellipse(this.y, this.x, this.pSize, this.pSize);
    }
    this.color = function() {
        fill();
    }
}