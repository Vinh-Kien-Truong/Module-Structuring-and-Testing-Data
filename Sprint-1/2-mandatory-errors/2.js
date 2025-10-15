// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

// this error occur because we are trying to use the variable cityOfBirth before it is declared
// to solve this problem we can move the declaration of cityOfBirth before the console.log line
// const cityOfBirth = "Bolton";
// console.log(`I was born in ${cityOfBirth}`);
