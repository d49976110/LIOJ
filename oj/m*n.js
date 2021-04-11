var readline = require('readline');

var lines = []
var rl = readline.createInterface({input: process.stdin});

rl.on('line', function (line) {
    lines.push(line)
});

rl.on('close', function () {
    solve(lines)
});
//1*1=1
function solve(lines) {
    let m = lines[0];
    let n = lines[1];
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            console.log(i + '*' + j + '=' + i * j);
        }
    }
}

