class EquilateralShape {

    /**
     * This class wil be responsible for creating equilateral shapes (all sides are equal).
     * 
     * @param {int} n               The number of corners
     * @param {float} radius        The radius of the shape
     * @param {float} angleOffset   The offset of the angles in degrees
     */
    constructor(n, radius, angleOffset) {
        this.n = n;
        this.radius = radius;
        this.angleOffset = angleOffset;

        this.points = this.calcPoints();
    }

    calcPoints() {
        
        let points = [];
        let rotation = 2 * Math.PI / this.n;
        let angle = this.angleOffset * Math.PI / 180;

        for(let i = 0; i < this.n; i++) {
            
            // Make sure all values are positive
            let x = (Math.cos(angle) + 1) * this.radius ;
            let y = (Math.sin(angle) + 1) * this.radius ;

            points.push([x, y]);

            angle += rotation;
        }

        return points;
    }
}

module.exports = {
    EquilateralShape: EquilateralShape,
}