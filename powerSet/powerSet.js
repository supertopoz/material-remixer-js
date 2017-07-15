/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */
// Get all possible combinations of a word. 

let mySet = new Set();
let temp = []

let builder = function(str){
  	
  for (var i = str.length; i > 0; i --){
  	let result = str.substr(0, i-1)+str.substring(i).split('').sort().join('')
  	mySet.add(result);
  	temp.push(result);
  }
  return temp
}

let powerSet = function(str) {

  builder(str)
    .forEach(x => builder(x)
      .forEach( y => builder(y)))
  mySet.add(str)
  return [...mySet].sort();
};



console.log(powerSet('jump'));
