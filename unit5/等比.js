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
    let n = lines[0];
    let tem =lines[1];
    let arr = tem.split(" ");
    let a = arr[1]/arr[0];
    for(let i=0 ; i<n-1 ; i++){
        if(arr[i+1]/arr[i] !==a){
            return console.log("No");
        }
    }
    return console.log("Yes");

}
