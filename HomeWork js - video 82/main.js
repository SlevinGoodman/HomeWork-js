// HW task #1
function greeting(greetWord, firstName) {
  return greetWord + firstName;
}
const resultGreeting = greeting("Hello ", "Slevin");
console.log(resultGreeting);

// HW task #2
const numbers = [1, 3, 4, 7, 10, 13, 17, 20, 64];
function checkArrayNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      console.log(array[i]);
    }
  }
  return;
}
console.log(checkArrayNumbers(numbers));

// HW task #3
function calcMinus(num1, num2) {
    return num1 - num2
}
const resultCalcMinus = calcMinus(2, 3);
console.log(resultCalcMinus);

function calcPlus(num1, num2) {
    return num1 + num2
}
const resultCalcPlus = calcPlus(2, 3);
console.log(resultCalcPlus);

function calcMultiplication(num1, num2) {
    return num1 * num2
}
const resultCalcMultiplication = calcMultiplication(2, 3);
console.log(resultCalcMultiplication);

function calcDivision(num1, num2) {
    return num1 / num2
}
const resultCalcDivision = calcDivision(2, 3);
console.log(resultCalcDivision);