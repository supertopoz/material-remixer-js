/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  
  let final = arr.reduce((arc,item)=>{
    (arc[item] === undefined)? arc[item] = 1 : arc[item] += 1
    return arc
  },{})
  for (var i = 0; i<arr.length; i ++){
  	if (final[arr[i]]%2 === 0) return arr[i]
  }
};

var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6,  8, 9, 6, 4]);

console.log(onlyEven);
