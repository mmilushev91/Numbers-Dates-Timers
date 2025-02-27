//Remaider operator

console.log(5 % 2);
console.log(5 / 2);

console.log(6 % 2 === 0);
console.log(7 % 2 === 0);

const isEven = num => num % 2 === 0;

console.log(isEven(23));
console.log(isEven(22));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
