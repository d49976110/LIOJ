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
    let card_number = lines[0];
    let number = card_number.split("-");
    let n = number.join("");
    let D = 0;
    let DD = 0;
    for(let i=0 ; i<n.length-1 ; i = i+2){
        D += Number(sum(n[i]));
    }
    for(let i=1 ; i<n.length-1 ; i = i+2){
        DD += Number(n[i]);
    }

    let ans = D+DD
    // console.log("D="+D);
    // console.log("DD="+DD);
    // console.log("ans="+ans);
    // console.log("checkcode="+checkcode(ans));

    let x =Number(n[15]);
    if(isValid(ans,x)){
        let mapping = {
            5:"MASTER_CARD",
            4:"VISA",
        }

        return console.log(mapping[n[0]]);

    }else {
        return console.log("INVALID");
    }
}
function sum(n) {
    if(n*2 >=10){
        let m = n*2-9;
        return m;
    }else{
        let m = n*2;
        return m ;
    }
}

function checkcode(n) {
    if(n%10 ===0){
        return 0;
    }else{
        let m =n%10;
        return 10-m ;
    }
}

function isValid(n,x) {
    if(checkcode(n) === x) return true;
    return false;
}
