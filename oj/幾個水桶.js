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
    let n = Number(lines[0]); //20
    let ans = 0

    //需要減幾次2的n次方
    while(n!==0){
        n = n - 2**digi(n);
        ans += 1;
    }
    console.log(ans);
}

//計算2的幾次方最接近
function digi(n){
    let m = n
    let digi = 0;
    while(Math.floor(m/2)!==0){
        digi += 1 ;  //1,2,3,4,
        m = m/2;     // 10,5,2.5,1.25
    }
    // console.log(digi)
    return digi ; 
}