// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
/*
    My prediction is that this code will produce an error because there is a variable name conflict.
    and the console.log statement is trying to access decimalNumber which is not defined in that scope.
*/

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
/*
    The error is occurring because there is a variable name conflict.
    Inside the function convertToPercentage, there is a parameter named decimalNumber and a variable declared with const also named decimalNumber.
    This causes a syntax error because we cannot declare two variables with the same name in the same scope.
    To fix this problem, we can rename the variable declared with const to a different name.
    and also, the console.log statement is trying to access decimalNumber which is not defined in that scope.
*/
// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentageValue = decimalNumber;
  const percentage = `${percentageValue * 100}%`;

  return percentage;
}
console.log(convertToPercentage(0.75));
