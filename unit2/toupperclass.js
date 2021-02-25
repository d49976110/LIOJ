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

//Hello
function solve(lines) {
    var str = lines[0];
    var ans = ""
    for(i=0 ; i<str.length ; i++){
        // console.log(str[i])
        var code = Number(str[i].charCodeAt(0));
        if(code>97 && code<122){
            ans += String.fromCharCode(code-32);
        }
        else{
            ans+=str[i]
        }
    }
    console.log(ans);

}
