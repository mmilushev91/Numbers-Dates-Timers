//Creating dates

const now = new Date();
console.log(now);

console.log(new Date('Thu Feb 27 2025 18:18:58'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

accounts.forEach(function (acc) {
  acc.movementsDates.forEach(function (date, i) {
    console.log(i + 1 + ': ' + new Date(date));
  });
});

//month is zero based
console.log(new Date(2037, 10, 19, 15, 23, 5));
//js autocorrects the day
console.log(new Date(20237, 10, 31));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//Working with dates
console.log('--------------------------');
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
//zero based
console.log(future.getMonth());
//day of month
console.log(future.getDate());
//day of week
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
//timestamp the miliseconds that has been passed since the date
console.log(future.getTime());
console.log(new Date(future.getTime()));

//get current timestamp
console.log(Date.now());

future.setFullYear(2040);
