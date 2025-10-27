function countChar(stringOfCharacters, findCharacter) {
  return stringOfCharacters.split("").reduce((count, char) => {
    if (char === findCharacter) {
      return count + 1;
    }
    return count;
  }, 0);
}

module.exports = countChar;
