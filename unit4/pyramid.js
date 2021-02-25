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
    var n =lines[0];
    for(let i=1 ; i<=n ;i++){
        var s = "";
        for(let j=n-i ; j>0 ; j--){
            s += " ";
            // console.log(j)
        }
        for(let k=1; k<=2*i-1 ; k++){
            // console.log(k)
            s +="*";
        };

    console.log(s);
    }

}
