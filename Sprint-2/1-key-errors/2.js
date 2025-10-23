
// Predict and explain first BEFORE you run any code...


// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
/*
    My prediction is that this code will produce an error because the parameter name is not a valid identifier.
*/

function square(3) {
    return num * num;
}

// =============> write the error message here
/*
    SyntaxError: Unexpected number
*/  
// =============> explain this error message here
/*
    The error is occurring because the parameter name "3" is not a valid identifier in JavaScript.
    In JavaScript, parameter names must start with a letter, underscore (_), or dollar sign ($) and cannot be a number.
    To fix this problem, we can rename the parameter to a valid identifier, such as "num".
*/
// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}

console.log(square(4)); 
