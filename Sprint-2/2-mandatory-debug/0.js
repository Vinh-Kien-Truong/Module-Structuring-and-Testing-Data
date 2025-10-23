// Predict and explain first...
/*
    My prediction is that this code will produce an error because the function multiply does not return any value.
*/
// =============> write your prediction here

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
/*
    The error is occurring because the function multiply does not return any value.
    When we call multiply(10, 32), it calculates the product but it does not return the result.
    Therefore, when we try to use the return value of multiply in the console, it results in undefined.
    To fix this problem, we need to add a return statement in the multiply function to return the product of a and b.
*/
// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); // example output: The result of multiplying 10 and 32 is 320
