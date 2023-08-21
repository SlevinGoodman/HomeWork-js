// HW task #2 - did before
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

// HW task #2 -v2 - for checking

const numbers2 = [1, 3, 4, 7, 10, 13, 17, 20, 64];
function checkArrayNumbers2(numbers2) {
  for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > 10) {
      console.log(numbers2[i]);
    }
  }
  return;
}
checkArrayNumbers2(numbers2)

// HW task #3 - v2 - for checking
function calcMain(num1, num2, sign) {
  if (sign === '*') {
return num1 * num2
  } else if (sign === '/') {
  return num1 / num2
} else if (sign === '+') {
  return num1 + num2
} else if (sign === '-') {
  return num1 - num2
}
else {
  let errorMessage = 'What do you want, dude?'
  return console.log(errorMessage)
}
}
const resultCalcMain = calcMain(11111111, 10000, '*')
console.log(resultCalcMain)


// HW task #3 - did before
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