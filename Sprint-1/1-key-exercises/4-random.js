const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/**
 * The expression is generating a random integer between the minimum and maximum values.
 * Math.floor() will round down the number to the nearest integer.
 * Math.random() will generate a random number between 0 and 1 (not including 1).
 * The expression (maximum - minimum + 1) calculates the range of possible values.
 * Multiplying Math.random() by this range scales the random number to the desired range.
 * Adding minimum shifts the range to start from the minimum value.
 * Finally, Math.floor() ensures that the result is an integer.
 **/
console.log(num);
//example output: 42
//example output: 7
//example output: 56
//example output: 1
//example output: 48
