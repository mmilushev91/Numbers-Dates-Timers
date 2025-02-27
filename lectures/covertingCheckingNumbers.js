//all numbers are represented as decimal in binary form
console.log(23 === 23.0);

//base 10 - 0 to 9.
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

//coverting string with number
console.log(Number('23'));
console.log(+'23');

//Parsing
//string needs to start with number, second argument is base
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('2.5rem', 10));
console.log(Number.parseFloat('2.5rem', 10));

//Check if value is NAN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(20 / 0));
console.log(20 / 0);

//Checking if value is number. decimal
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite('20x'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(23 / 0));

//Check if integer

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
