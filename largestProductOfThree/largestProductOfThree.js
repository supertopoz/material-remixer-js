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


