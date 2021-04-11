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
    let n = lines[0]; //共有n個數
    let arr = lines[1].split(" ");
    let x = arr[1]/arr[0] //公差
    // console.log(x);
    for(let i=0 ; i<(n-1) ;i++){
        let y = arr[i+1]/arr[i];
        if(y !==x){
            return console.log("No");
        }
    }
    return console.log("Yes");
}



