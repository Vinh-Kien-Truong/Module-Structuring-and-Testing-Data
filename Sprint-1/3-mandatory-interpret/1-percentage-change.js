let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
/* 
    4 functions calls in line 4 and line 5
    Line 4: carPrice.replaceAll(",", "")
    Line 4: Number(carPrice.replaceAll(",", ""))
    Line 5: priceAfterOneYear.replaceAll("," "")
    Line 5: Number(priceAfterOneYear.replaceAll("," ""))
*/

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/*
    the error is coming from line 5
    this error occur because it miss a comma in the expression priceAfterOneYear.replaceAll("," "")
    to solve this problem we can add a comma between the two quotation marks
    priceAfterOneYear.replaceAll(",", "")
*/

// c) Identify all the lines that are variable reassignment statements
/*
    2 variable reassignment statements in line 4 and line 5
    Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
    Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
*/

// d) Identify all the lines that are variable declarations
/*
    4 variable declarations in line 1, 2, 7 and 8
    Line 1: let carPrice = "10,000";
    Line 2: let priceAfterOneYear = "8,543";
    Line 7: const priceDifference = carPrice - priceAfterOneYear;
    Line 8: const percentageChange = (priceDifference / carPrice) * 100;
*/

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/*
    this expression is converting the string carPrice to a number
    it will return NaN if the string cannot be converted to a number
*/