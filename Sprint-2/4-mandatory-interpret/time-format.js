function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions
console.log(formatTimeDisplay(3661)); // 01:01:01

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
/*
    Pad will be called 3 times when formatTimeDisplay is called.
*/
// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
/*
    The value assigned to num when pad is called for the first time is the value of totalHours.
    For example, if formatTimeDisplay(3661) is called, totalHours is 1, so num will be 1 in the first call to pad.
*/

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
/*
    The return value of pad when it is called for the first time is "01".
    This is because totalHours is 1, and pad(0) returns "01".
*/

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
/*
    The value assigned to num when pad is called for the last time in this program is the the value of remainingSeconds .
    For example, if formatTimeDisplay(3661) is called, remainingSeconds is 1, so num will be 1 in the last call to pad.
    This is because the last pad in the template string is pad(remainingSeconds).
*/

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
/*
    The return value of pad when it is called for the last time is "01".
    This is because remainingSeconds is 1, and pad(1) returns "01".
*/
