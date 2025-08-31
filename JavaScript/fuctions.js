function outer() {
  let count = 0;  // local binding

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();  // outer() runs, returns inner
counter(); // 1
counter(); // 2
counter(); // 3
