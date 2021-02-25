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
    //分隔array中的value
    for(i=0 ; i<lines.length ; i++){

        var line = lines[i].split(" ");
        var a = Number(line[0]);
        var b = Number(line[1]);
        //將array的value相加
        if (a == 0 && b == 0){
            return;
        }
        else{
            if(a>=b){
                console.log(a);
            }
            else {
                console.log(b);
            }
        }
    }
}
