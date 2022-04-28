// Var vs. Let varibles

function doSomething() {
  for (let i = 0; i < 5; i++){
    console.log(i);
  }

  console.log('Finally: ' + i);
}

doSomething();

//TypeScript will complie errors in the tsc main.ts
// but still return valid javaScript code in main.js
