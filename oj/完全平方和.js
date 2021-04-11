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


// function solve(lines) {
//     let number = Number(lines[0]);
//     let x = 0 ; 
//     let sum = 0;
//     while(x**2 < number){
//         x ++;
//     }
//     for(let i=0 ; i<x ;i++){
//         sum += i**2 ; 
//     }
//     return console.log(sum);
// }

function solve(lines){
    let n = lines[0];
    let sum = 0 ;
    for(let i=0 ; i<n ; i++){
        if(isSquare(i)){
            sum += i ;
        }
    }
    console.log(sum);
}

function isSquare(i){
    let sqrt = Math.floor(Math.sqrt(i));
    if(Math.sqrt(i) == sqrt){
        return true ; 
    }else return false ; 
}