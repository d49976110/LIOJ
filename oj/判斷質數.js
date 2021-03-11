const { ENOTEMPTY } = require('constants');
var readline = require('readline');
const { isNull } = require('util');

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

function solve(lines){
    let n = Number(lines[0]);
    for(let i=1 ;i<=n ;i++){
        let m = Number(lines[i]);
        if(isPrime(m)){
            console.log("Prime");
        }else{
            console.log("Composite");
        }
    }
}

function isPrime(m){
    if(m === 1){
        return false;
    }else{
        for(let i=2; i<m ; i++){
            if(m%i === 0){
                return false;
            }
        }
        return true;

    }
    
    

}