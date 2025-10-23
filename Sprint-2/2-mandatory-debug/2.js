// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
/*
    My prediction is that this code will always return the last digit of 3, which is 3,
    regardless of the input provided to the getLastDigit function.
*/

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
/*
    The last digit of 42 is 3
    The last digit of 105 is 3
    The last digit of 806 is 3
*/
// Explain why the output is the way it is
// =============> write your explanation here
/*
    The output is the way it is because the getLastDigit function is using a global variable num,
    which is set to 103. Therefore, regardless of the input provided to the getLastDigit function,
    it always converts the number 103 to a string and returns the last character, which is '3'.
    To fix this problem, we need to modify the getLastDigit function to accept a parameter
    and use that parameter instead of the global variable num.
*/
// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
