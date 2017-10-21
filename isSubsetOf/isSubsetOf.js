/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {

  let uniq = Array.from(new Set(this));

  arr = arr.reduce((ac,x)=>{
    ac.push(JSON.stringify(x));
    return ac;
  },[])

  let r = uniq.reduce((ac,x)=> {
    if(arr.indexOf(JSON.stringify(x)) >=0) ac.push(x);
    return ac;
  },[]).length;
  return (r === uniq.length) ? true : false;
};

var assert = (actual, expected, test) => {
	if(actual === expected) return "PASSED: " + test;
	return "FAILED:" +test+" expected:"+expected+" but got:" + actual;
}


// ------------------Test 1 basic ----------------------------------------------------
 let a = ['commit','push']
 let expected1 = true;
 let test1 = 'It checks a is a subset of the array';
 console.log(assert(a.isSubsetOf(['commit','rebase','push','blame']),expected1,test1))

// ------------------Test 2 dublicated enteries ---------------------------------------------------

 let b = ['merge','reset','reset'];
 let expected2 = true;
 let test2 = 'It checks b is a subset of the array then the array contains duplicates';
 console.log(assert(b.isSubsetOf(['reset','merge','add','commit']),expected2,test2))

 // ------------------Test 3 negative basic test ---------------------------------------------------

 let c = ['bob','steve'];
 let expected3 = false;
 let test3 = 'It checks c is NOT a subset of the array';
 console.log(assert(c.isSubsetOf(['reset','merge','add','commit']),expected3,test3))

  // ------------------Test 4 tests for an array with an object ---------------------------------------------------

 let d = [{"name":"bob"},'steve'];
 let expected4 = true;
 let test4 = 'It checks d as an object is a subset of the array';
 console.log(assert(d.isSubsetOf(['reset',{"name":"bob"},'steve','commit']), expected4 , test4))

   // ------------------Test 5 tests for an array with an array ---------------------------------------------------

 let e = [["bill","bob"],'steve'];
 let expected5 = true;
 let test5 = 'It checks e as an array is a subset of the array';
 console.log(assert(e.isSubsetOf(['reset',["bill","bob"],'steve','commit']), expected5 , test5))

 // ------------------Test 6 negative test for an array with an object ---------------------------------------------------

 let f = [{"name":"bob"},'steve'];
 let expected6 = false;
 let test6 = 'It negative checks f is not a subset of the array where f contains an object';
 console.log(assert(f.isSubsetOf(['reset',{"name":"bob","name":"cooliloo"},'steve','commit']), expected6 , test6))

 // ------------------Test 7 negative test for array with an array ---------------------------------------------------

 let g = [["bill","bob"],'steve'];
 let expected7 = false;
 let test7 = 'It checks g as an array is not a subset of the array';
 console.log(assert(g.isSubsetOf(['reset',["bill"],'steve','commit']), expected7 , test7))


