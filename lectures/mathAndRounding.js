//Math and Rounding

//square root
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
//cubic root
console.log(8 ** (1 / 3));
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));
console.log(Math.min(5, 18, 23, 11, 2));
console.log(Math.PI * Number.parseFloat('10px') ** 2);
console.log(Math.trunc(Math.random() * 6 + 1));

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomInt(10, 20));
console.log(randomInt(0, 3));

//Rounding integers

console.log(Math.trunc(23.3));
console.log(Math.floor(23.3));
console.log(Math.ceil(23.4));

console.log(Math.round(23.9));
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

//floating point numbers
//returns string
console.log((2.9).toFixed(2));
console.log(+(2.9).toFixed(2));
