// Interfaces / Creating customs types in TypeScript

interface Point {
  x: number,
  y: number
}

let drawPoint = (point: Point) => {
  //...
}

let getDistance = (pointA: Point, pointB: Point) => {
  //...
}

drawPoint({
  x: 1,
  y: 2
})
