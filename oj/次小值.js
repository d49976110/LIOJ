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
  let max1 = -Infinity;
  let max2 = -Infinity;
  for(let i=0 ;i < lines.length; i++){

    if(Number(lines[i]) > max1){
      max2 = max1;
      max1 = lines[i];
    }else if(Number(lines[i]) > max2){
      max2 = lines[i];
    }
  }
  return console.log(max1,max2); 


}