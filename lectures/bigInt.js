//working with BigInt

//biggest number in JS
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

//big int data type. used to store numbers greater than the max safe number
console.log(1201020102283892382893293892923293n);
console.log(BigInt(12010201022838));

//operations

console.log(10000n + 10000n);
console.log(2102101020112012010210n * 10000n);

const huge = 10201201020120102102912910210n;
const num = 23;

// cannot perform operations with big int and normal number;

console.log(huge * BigInt(num));

//exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

console.log(huge + 'is REALY big');

//division
console.log(10n / 3n);
console.log(10 / 3);
