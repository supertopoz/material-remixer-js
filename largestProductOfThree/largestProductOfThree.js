/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = (array) => array.sort().slice(-3).reduce((a,b)=>a*b);

console.log(largestProductOfThree([2,1,3,7]));
console.log(largestProductOfThree([-2,-1,-3,-7]));



var largestProductOfThree = function(array){
	var sortedNums = array.slice().sort(function(a,b){
		return a - b;
	})
	var n = sortedNums.length;
	var firstProduct = sortedNums[0]*sortedNums[1]*sortedNums[2]
	var larstProduct = sortedNums[n-1]*sortedNums[n-2]*sortedNums[n-3]
	return Math.max(firstProduct, larstProduct)
}

// O(n log n)
