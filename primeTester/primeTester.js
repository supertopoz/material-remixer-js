/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0 || n === 2) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  for(var i = n-1; i > 1; i --){
  	if (!(n%i)) return false  	
  }
  return true
};

var primeSieve = function (start, end) {
    let result = [];
	for (var i = start; i <= end; i ++){
		if(primeTester(i)){
			result.push(i);
		}
	}
	return result;
};

console.log(primeSieve(1,7))


