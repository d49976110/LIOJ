var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
});


function solve(lines) {
    let n = Number(lines[0]);
    let arr = [];
    for(let i=1 ; i<= n*4 ; i=i+2){
        arr.push([lines[i],lines[i+1]]);
    } 
    
    for(let i=0 ;i<arr.length ; i=i+2){
    	let ans = distance(arr[i],arr[i+1]);
		console.log(ans);
    }
    
   
}

function distance(arr1,arr2){
	let x = (arr1[0]-arr2[0])**2;
	let y = (arr1[1]-arr2[1])**2;

	let num = Math.sqrt(x+y);
	return num.toFixed(2); 
}