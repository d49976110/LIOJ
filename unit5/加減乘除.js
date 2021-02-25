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
    let temp = lines[0].split(" ");
    let a = Number(temp[0]);
    let b = Number(temp[2]);
    if(temp[1] == "+"){
        console.log(a+b);
    }else if (temp[1] == "-") {
        console.log(a-b);
    }else if (temp[1] == "*") {
        console.log(a*b);
    }else{
        console.log(a/b);
    }
}


//解法二，但是不建議使用
// function solve(lines) {
//     var tem = lines[0].split(" ");
//     str = tem.join("");
//     ans = Math.floor(eval(str));
//     console.log(ans);
//
// }
