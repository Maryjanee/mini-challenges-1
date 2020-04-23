/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

function isValid(str) {
  const acceptableChars = ["{", "}", "(", ")", "[", "]"];
  let countObject = {};

  const characterCount = (word, character) => {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === character) {
        count++;
      }
    }
    return count;
  };
  for (let i = 0, l = acceptableChars.length; i < l; i++) {
    let currentChar = acceptableChars[i];
    countObject[currentChar] = characterCount(str, currentChar);
  }

  
}

module.exports = isValid;
