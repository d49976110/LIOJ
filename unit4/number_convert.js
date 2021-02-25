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

// input = 1234
function solve(lines) {
    var n = lines[0];
    var str = ""
    while(n !=0 ){
        str += (n%10) //4,3,2,1
        n = Math.floor(n/10); //123,12,1,0
    }
    //str = 4321
    var ans = ""
    var m = str.length //4
    for(let i = m-1 ; i>=0 ; i--){
        ans += str[i];
    }
    console.log(Number(ans)+1) //這個也是ok的，可以把ans從字串轉num
}
