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


function solve(lines) {
    let n = Number(lines[0]);
    let word = lines[1];
    let arr = word.split("");
    // console.log(arr);
    let result = "";

    for(let i=0 ; i<arr.length ; i++){
        
        result += ceaser(arr[i],n);
    }
   console.log(result);
}

function ceaser(word , n){
    let position = word.charCodeAt(0) - 97 ;
    // console.log("position="+position);
    let newposition = (position+n)%26;
    // console.log("newposition="+newposition);
    return  String.fromCharCode(newposition+97);
}


