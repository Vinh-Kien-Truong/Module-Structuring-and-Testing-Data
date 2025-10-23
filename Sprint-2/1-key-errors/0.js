// Predict and explain first...
//  =============> write your prediction here
/*
    My prediction is that this code will produce an error because there is a variable name conflict.
*/
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
/*
    The error is occurring because there is a variable name conflict.
    Inside the function capitalise, there is a parameter named str and a variable declared with let also named str.
    This causes a syntax error because we cannot declare two variables with the same name in the same scope.
    To fix this problem, we can rename the variable declared with let to a different name.
*/

// =============> write your new code here

function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}

console.log(capitalise("hello")); // example output: "Hello"
