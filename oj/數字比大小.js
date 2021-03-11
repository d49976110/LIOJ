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

function solve(lines){
    let m =lines[0];
    let n =lines[1];

    if(m.length > n.length){
        return console.log(m);
    }
    else if(m.length < n.length){
        return console.log(n);
    }
    else{
        for(let i=0 ;i<m.length ; i++){
            if(Number(m[i]) == Number(n[i])){
                continue
                
            }else if(Number(m[i])<Number(n[i])){
                return console.log(n);
            }else{
                return console.log(m);
            }

        }
        return console.log("even");
    }
}