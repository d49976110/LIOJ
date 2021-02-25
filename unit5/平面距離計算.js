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
    for(let i=1 ;i<=n ; i++ ){
        let st = (i-1)*4+1
        let result = (lines[st]-lines[st+2])**2 +(lines[st+1]-lines[st+3])**2
        let ans = Math.sqrt(result).toFixed(2);
        // console.log(result)
        console.log(ans)
    }
}



//第二種解法
// function solve(lines) {
//     let n = Number(lines[0]);
//     let arr = lines.slice(1);
//     let i =1;
//
//     while(i<=n){
//         let number = cal(arr)
//         console.log(number)
//         arr = arr.slice(4);
//         i += 1;
//     }
// }
//
//
// function cal(n) {
//     let result =(n[0]-n[2])**2+(n[1]-n[3])**2;
//     let number = Math.sqrt(result);
//     let ans = number.toFixed(2);
//     return ans;
// }
