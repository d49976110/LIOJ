var readline = require('readline');

var lines = []
var rl = readline.createInterface({input: process.stdin});

rl.on('line', function (line) {
    lines.push(line)
});

rl.on('close', function () {
    solve(lines)
});


//1,1,2,3,5,8,

function solve(lines) {
    let n = Number(lines[0]);
    if(n <= 2) return console.log(1);

	let sum = 0;
	let s1 = 1;
	let s2 = 1;
	for(let i=2 ;i<n ;i++){
		sum = s1+s2;
		s1 = s2 ; 
		s2 = sum ; 
	}
	console.log(sum)
}
