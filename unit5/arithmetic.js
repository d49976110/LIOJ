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

//1234
function solve(lines) {
    var m = Number(lines[1])-Number(lines[0]);
    var n = lines.length //4

    for(let i=0 ; i <n-1 ; i++){
        var x =(Number(lines[i+1])-Number(lines[i]))
        // console.log(x)
        if( x !== m) return console.log(false);
    }
    return console.log(true);
}
