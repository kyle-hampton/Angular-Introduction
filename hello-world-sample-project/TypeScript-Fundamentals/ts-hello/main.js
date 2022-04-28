// datatypes in TypeScript
//type annotations in TypeScript --> (ex: let a: number; )
// with type annotations you are defining the datatype of a variable --> let a: number;
var a;
a = 1;
// a = true;
// a = 'a';
/*
  DataTypes allowed in TypeScript (
  number,
  boolean,
  string,
  any,
  number[] --> (Number Array),
  any[] --> (Any Array --> can add any data type can be placed in this Array)
)
*/
// let a:  number;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
/* Enumering allow to create a container for related constants (const)  */
/* Enumering in TypeScript is compiled into a differ format in JavaScript */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
