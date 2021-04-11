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
    let temp = lines[0];
    let arr = temp.split(" ");
    let operator = arr[1];
    let lookup = {
        "+" :  Number(arr[0])+Number(arr[2]),
        "-" :  Number(arr[0])- Number(arr[2]),
        "*" :  Number(arr[0])* Number(arr[2]),
        "/" :  Number(arr[0])/ Number(arr[2]),
    }
    console.log(lookup[operator]);
    // console.log(lookup["+"]);
    


}