/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
 
  var obj = {};
    for(var i of string){
    	if(obj[i] === undefined) obj[i] = 1;
    	else obj[i] += 1;
    }
    for(var key in obj){ if(obj[key] === 1) return key; };
    return null;
};

console.log(firstNonRepeatedCharacter('AACBDB'))
