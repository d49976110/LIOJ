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
    let n = lines[0];
    let squar = 1 ; 
    while(squar **2 < n){
        console.log(squar);
        squar ++;
    } 
    // console.log(squar);
}