// HW task #3 - v2 - did before 
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


// HW task #3 - v3 - for checking
function calcMainSwitch(num1, num2, sign) {
    switch (sign) {
    case '*':
      return num1 * num2
      break;
    case '/':
      return num1 / num2
      break;
    case '-':
      return num1 - num2
      break;
    case '+':
      return num1 + num2
      break;
  }
}
console.log(calcMainSwitch(22222222222, 100000000000, '/'));