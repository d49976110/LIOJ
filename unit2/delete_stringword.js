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
//hello
//l
function solve(lines) {
    var str = lines[0];
    var deleteword = lines[1];
    // console.log(deleteword)
    var ans = "";
    for(i=0 ; i<str.length ;i++){
        if(str[i] !== deleteword){
            ans += str[i];
        }
    }
    console.log(ans);

}
