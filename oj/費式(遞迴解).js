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
    let n = Number(lines[0]);
    // console.log(n.log);
    let F = function(n){
      if(n<2) return 1;
      return F(n-1)+F(n-2);
    }
    console.log(F(n));
}

