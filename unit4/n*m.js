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
    var n =lines[0];
    var m =lines[1];
    for(let i=1 ; i<=n ; i++){
        for(let j =1 ; j <=m ; j++){
            var str = i +'*'+ j+ "="+i*j;
            console.log(str);
        }
    }
}
