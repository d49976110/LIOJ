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
})

function solve(lines) {
    var n = Number(lines[0]);
    for(let i=1 ; i<=n ; i++){
        var ans = "";
        for(let j=1 ; j<=(n-i) ; j++){
            ans +=" ";
        }
        for(let j=1 ; j<=(2*i-1); j++){
            ans +="*";
        }
        console.log(ans);
    }


    for(let i=1 ; i <= n-1 ; i++){
        var str = "";
        for(let i=1 ; i<=(n-1) ; i++){
            str += " ";
        }
        str += "|";
        console.log(str);
    }
}
