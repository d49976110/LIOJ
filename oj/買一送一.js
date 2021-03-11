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

function solve(lines){
    let m = Number(lines[0]);
    let n = Number(lines[1]);
    let max = []
    if(m>n){
        console.log(m*2);
        console.log(m-n);
    }else{
        console.log(n*2);
        console.log(n-m);
    }

    
}
