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

//30

function solve(lines) {
    var n = lines[0];
    //for i from 1 to n
    for(i=1 ; i<=n ;i++){
        //if i %15 ==0, print "fizz buzz"
        if(i%15 ==0){
            console.log("Fizz Buzz");
        }
        else if (i%3 ==0) {
            console.log("Fizz");
        }
        else if (i%5 ==0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }

    }

}
