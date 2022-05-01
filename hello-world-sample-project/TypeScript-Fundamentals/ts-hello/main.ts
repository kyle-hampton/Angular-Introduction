// Classes in TypeScript

// A Class is a container that hold relevent sections of code
// Variable in a Class are called "Properties"
// Functions in a Class are called "Methods"

//This is a Class
class Point {

    // Properties

    // Access Modifers (public, private, protected)
    // Access Modifiers --> Are key words that add you can add to a memeber of a class to control its Access from the outside
    // private x: number;
    // private y: number;

    // Access modifiers can be added to constructor parameters
    // The TypeScript compiler is used to generate and init

    constructor(private x?: number, private y?: number){
    }

    // Methods
    draw(){
      // to pull properties into a method use the "this.[VARIABLENAMEHERE]"
      console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

 /* To create an instance of a class you have to allocate memory space this is
 done through the "new ClassNameHere()" */
 // Classes create new instances of Objects

// This is an Objects --> new Point();
// this Object is assigned to a varible named 'point'
let point = new Point(1 ,2);
point.draw();
