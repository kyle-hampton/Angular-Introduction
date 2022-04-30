// Classes in TypeScript
// A Class is a container that hold relevent sections of code
// Variable in a Class are called "Properties"
// Functions in a Class are called "Methods"
//This is a Class
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    // Methods
    Point.prototype.draw = function () {
        // to pull properties into a method use the "this.[VARIABLENAMEHERE]"
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
/* To create an instance of a class you have to allocate memory space this is
done through the "new ClassNameHere()" */
// Classes create new instances of Objects
// This is an Objects --> new Point();
// this Object is assigned to a varible named 'point'
var point = new Point(1, 2);
point.draw();
