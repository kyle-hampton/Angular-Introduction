// Classes in TypeScript

// A Class is a container that hold relevent sections of code
// Variable in a Class are called "Properties"
// Functions in a Class are called "Methods"

//This is a Class
class Point {
    // Properties
    x: number;
    y: number;

    // Constructors are methods that are called when the instance of a class called
    // Unlike java and C# you can only need one constructor
    // '?' symbol
    construtor(x?: number, y?: number){
      this.x = x;
      this.y = y;
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
let point = new Point();
point.draw();
