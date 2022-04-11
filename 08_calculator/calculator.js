const add = function(...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  return sum;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum)
  }
  return sum;
};

const multiply = function(numbers) {
  let product = 1;
  for (let i of numbers) {
    product *= i;
  }
  return product;
};

const power = function(number, exponent) {
  let product = 1;
	for (let i = 1; i <= exponent; i++) {
    product *= number;
  }
  return product;
};

const factorial = function(number) {
	let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
};

console.log(power(4, 3));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
