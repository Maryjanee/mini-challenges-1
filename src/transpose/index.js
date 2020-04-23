/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  var arr = [];
  var temp_arr;

  for (var i = 0; i < array[0].length; i++) {
    temp_arr = [];
    for (var j = 0; j < array.length; j++) {
      temp_arr.push(array[j][i]);
    }
    arr.push(temp_arr);
  }
  return arr;
}

module.exports = transpose;
