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
    var tem = lines[0].split(" ");
    var n = Number(tem[0]);
    var m = Number(tem[1]);
    for(i=n ; i<=m ; i++){
        if(isFlower(i)){
            console.log(i);
        }
    }
}

function digi(n) {
    if(n ===0 )return 1
    var result = 0;
    while(n != 0 ){
        n = Math.floor(n/10);
        result += 1;
    }
    return result;
}

// console.log(isFlower(32))

function isFlower(n) {
    var str = 0;
    var m = n
    while(m!= 0){
        x = m%10;
        str += x**digi(n)
        m = Math.floor(m/10);
    }
    if(str === n ){
        return true;
    }else{
        return false;
    }
}
