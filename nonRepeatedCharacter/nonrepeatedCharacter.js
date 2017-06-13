/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
 
  var obj = {};
    for(var i = 0; i < string.length; i++){
    	if(obj[string[i]] === undefined) obj[string[i]] = 1;
    	else obj[string[i]] += 1;
    }
    // itterate the object to get the key with the lowest count and lowest index

    for(var key in obj){ if(obj[key] === 1) return key; };
    return null;
};

console.log(firstNonRepeatedCharacter('AACBDB'))
