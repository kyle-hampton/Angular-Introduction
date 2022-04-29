// Interfaces / Creating customs types in TypeScript

interface Point {
  x: number,
  y: number
}

let drawPoint = (point: Point) => {
  //...
}

drawPoint({
  x: 1,
  y: 2
})
