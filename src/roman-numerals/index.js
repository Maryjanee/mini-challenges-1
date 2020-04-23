/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  const romanNumeral = roman.toUpperCase();
  const romFigures = new Map([
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"][(10, "X")],
    [40, "LX"][(50, "L")],
    [90, "CX"][(100, "C")],
    [400, "CD"][(500, "D")],
    [900, "CM"][(1000, "M")],
  ]);
}

module.exports = romanToDecimal;
