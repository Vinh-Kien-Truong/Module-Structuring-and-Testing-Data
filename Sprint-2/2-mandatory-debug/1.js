// Predict and explain first...
//  =============> write your prediction here
/*
    My prediction is that this code will produce an error because the function sum does not return any value.
*/

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
/*
    The error is occurring because the function sum does not return the expected sum of a and b.
    The return statement is currently returning undefined because there is no expression after the return keyword.
    To fix this problem, we need to modify the return statement to return the result of a + b.
*/
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
