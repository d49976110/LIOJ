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
    let arr = lines[0].split(" ");
    let min = Number(arr[0]);
    let max = Number(arr[1]);  
    // console.log(min) 

    for(let i=min ; i<=max ; i++){
        if(flower(i)){
            console.log(i);
        }
    }

}
//1

function flower(x){
    if(x===0)return true;
    let n = x ; 
    let sum = 0;
    while(n!==0){
        sum += (n%10)**digi(x);
        n = Math.floor(n/10);
    }
    // console.log(sum);
    if(x==sum) return true;
    return false;
}

function digi(n){
    let digi = 0;
    while(n!==0){
        digi+=1;
        n = Math.floor(n/10);
    }
    // console.log(digi);
    return digi;
}