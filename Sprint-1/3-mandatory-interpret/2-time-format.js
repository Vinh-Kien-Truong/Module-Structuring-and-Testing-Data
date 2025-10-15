const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/*
    6 variable declarations in line 1, 3, 4, 6, 7 and 9
    Line 1: const movieLength = 8784; // length of movie in seconds
    Line 3: const remainingSeconds = movieLength % 60;
    Line 4: const totalMinutes = (movieLength - remainingSeconds) / 60;
    Line 6: const remainingMinutes = totalMinutes % 60;
    Line 7: const totalHours = (totalMinutes - remainingMinutes) / 60;
    Line 9: const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
*/

// b) How many function calls are there?
/*
    0 function calls
*/

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
/*
    The expression movieLength % 60 is using the modulus operator (%).
    This operator returns the remainder of a division operation.
    In this case, it divides movieLength (which is 8784) by 60.
    MovieLength % 60 gives us the remaining seconds after divided by 60.
*/

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/*
    The expression (movieLength - remainingSeconds) / 60 is calculating the total number of whole minutes in the movie length.
    First, it subtracts the remaining seconds (calculated in line 3) from the total movie length in seconds (movieLength).
    This gives the total number of seconds that can be fully converted into minutes.
    Then, it divides that result by 60 (the number of seconds in a minute) to convert those seconds into minutes.
    The final result is assigned to the variable totalMinutes, which represents the total number of whole minutes in the movie length.
*/

// e) What do you think the variable result represents? Can you think of a better name for this variable?
/*
    The variable result represents the duration of the movie.
    A better name for this variable could be movieDuration.
*/
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/*
    This code will work for all positive integer values of movieLength.
    It will correctly calculate the hours, minutes, and seconds for any length of movie given in seconds.
    However, if movieLength is a negative number or a non-integer (like a decimal), the code may not produce meaningful results.
*/
