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
    let tem = lines[0];
    let str = ""
    for(let i=tem.length-1 ; i>=0 ; i--){
        str += tem[i];
    }
    // console.log(str);
    if(str == tem) return console.log("True");
    return console.log("False");


}
