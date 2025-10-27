function repeat(str, count) {
  if (count < 0) {
    throw new Error("Count must be a 0 or positive integer");
  }
  return str.repeat(count);
}

module.exports = repeat;
