/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

let sortFreq = function(data){
   let compare = (a,b) => {
    if(a[1] < b[1]) return 1;
    if(a[1] > b[1]) return -1;
    return 0
   }
   let result = JSON.parse(data).sort(compare);
   return result;
  }

let sortChar = function(data){

   let compare = (a,b) => {
    if(a[0].charCodeAt(0) > b[0].charCodeAt(0)) return 1;
    if(a[0].charCodeAt(0) < b[0].charCodeAt(0)) return -1;
    return 0
   }
   let result = JSON.parse(data).sort(compare);
   return result;
  }



let characterFrequency = function(string) {
  let obj = {};
  let result = [];
  let grandResult = [];
  string.split("").forEach(function(item){
  	(obj[item] === undefined)? obj[item] = 1 : obj[item] += 1;
  })
  for (var i in obj){
    result.push([i,obj[i]])
  }
  var result1 = JSON.stringify(result)
  var result2 = JSON.stringify(result)
  grandResult.push(sortChar(result1))
  grandResult.push(sortFreq(result2))	
  	return grandResult;
};

console.log(characterFrequency('miaaiaaippi'));