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
  // your code here
  let uniq = Array.from(new Set(this));
  let r = uniq.reduce((ac,x)=> {
    if(arr.indexOf(x) >=0) ac.push(x);
    return ac;
  },[]).length
  return (r === uniq.length) ? true : false;
};



 let a = ['commit','push']
 console.log(a.isSubsetOf(['commit','rebase','push','blame'])); // true

 let b = ['merge','reset','reset']
 console.log(b.isSubsetOf(['reset','merge','add','commit'])) // true 

