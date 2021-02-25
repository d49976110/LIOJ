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
    var c = lines[0]; //max
    var n = lines[1]; //things
    var ans = 0
    //if n > c
    //sort form lines[2]~lines[i] put into array
    //for 1 to c
    //add them
    if( n >= c){
        arr = lines.slice(2);
        arr.sort(function(a, b) {
          return b - a;
        });

        for (var i = 0; i < c; i++) {
            ans += Number(arr[i])
        }
        console.log(ans)
    }
    //if n < c
    //for 1 ~ n
    if(n < c){
        for(i=2 ; i < lines.length ; i++){
            // console.log(lines[i])
            ans += Number(lines[i]);
        }
        // console.log(ans)
    }


}
