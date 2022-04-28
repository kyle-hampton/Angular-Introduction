// datatypes in TypeScript

//type annotations in TypeScript --> (ex: let a: number; )
// with type annotations you are defining the datatype of a variable --> let a: number;

let a: number;
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
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

/* Enumering allow to create a container for related constants (const)  */
/* Enumering in TypeScript is compiled into a differ format in JavaScript */
enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3 }
let backgroundColor = Color.Red;
