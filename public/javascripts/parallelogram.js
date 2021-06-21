
class Parallelogram extends Figure{
    constructor(perimeter, area, firstSide, secondSide, thirdSide, fourthSide) {
        super(perimeter, area);
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
        this.fourthSide = fourthSide;
    }

    goal() {
        var goal = "parallelogram" + "(" + this.firstSide.toString() + "," + this.secondSide.toString() + "," +
            this.thirdSide.toString() + "," + this.fourthSide.toString() + ")."
        return goal;
    }
}