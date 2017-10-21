/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

function binarySearch(values, target) {
  return find(values, target, 0, values.length - 1);
};

function find(values, target, start, end) {
  if (start > end) { return null; }

  var middle = Math.floor((start + end) / 2);
  var value = values[middle];
  
  if (value > target) return find(values, target, start, middle-1);
  if (value < target) return find(values, target, middle+1, end); 
  return middle;
}


var index = binarySearch([1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24], 0);
console.log(index);
