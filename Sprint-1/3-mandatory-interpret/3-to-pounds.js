const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

/*
  2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1):  extract the whole string except the last character from the penceString variable and assign to a new variable penceStringWithoutTrailingP
  3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): ensures that the string has at least 3 characters by adding with leading zeros if necessary
  4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): extracts the whole string except the last two characters
  5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): extracts the last 2 characters and ensure it has two digits by adding with zeros after the remaining character if necessary
  6. console.log(`£${pounds}.${pence}`): outputs the final formatted price in pounds and pence to the console
*/
