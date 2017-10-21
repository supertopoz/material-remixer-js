/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/


let convertor = (arr,size) => {
  let obj = {"1":"rock","2":"paper","3":"scissors"};
  let result = arr.reduce((arr,x)=>{
    if(obj[x]) arr.push(obj[x]); 
    return arr;
  },[]);
  if (result.length === size) return result;
}

let roundBuilder = max => {
	let l = '1', r = '3';
	for(let i = 1; i < max; i++){
        l += '1'
        r += '3';
	}
	return [Number(l),Number(r)]
}

var rockPaperScissors = size => {

  let bigResult = [];
  let limits = roundBuilder(size)
  for (let i = limits[0]; i< limits[1]; i++){
  	let arr = convertor(i.toString().split(""),size);
  	if (arr) bigResult.push(arr)
  }
  return bigResult;
};

console.log(rockPaperScissors(8));
