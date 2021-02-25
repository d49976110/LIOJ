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


// solve([2,"yo","man",3,4,2,1]);

function solve(lines) {
    let n = Number(lines[0]);
    let str = "";
    for(let i=1 ; i<=n ; i++){
        str += lines[i];
    }

    let ans = "";

    // console.log(lines.length)
    for(let j=(n+2) ; j<lines.length ; j++){
        let x = Number(lines[j]);
        // console.log(j)
        ans +=str[x-1];
    }
    console.log(ans)
}
