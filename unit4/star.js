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

//解法一
function solve(lines) {
    var n = Number(lines[0]);
    for(let i=1 ; i<=n ; i++){
        var str ="";
        for(let j=1 ; j<=i ; j++){
            str +="*"
        }
        console.log(str);
    }
}

//解法二
function solve(lines) {
    var n = Number(lines[0]);
    for(let i=1 ; i<=n ; i++){
        print(i);
    }
}

function print(x) {
    var str = "";
    for(let j =1; j<=x ; j++){
        str +="*";
    }
    console.log(str);
}
