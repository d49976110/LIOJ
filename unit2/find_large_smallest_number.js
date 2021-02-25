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

//找出最小值
// function solve(lines) {
//     //let x = line[0];
//     var x = lines[0];
//     //for i from lines[0]~lines[i]
//     for( i=0 ; i<lines.length ; i++){
//         //if lines[i] < x
//         if(lines[i]<x){
//               x = lines[i];
//         }
//     }
//     console.log(x);
// }

//找出次大值，超過100以上的數字無法計算，要加上Number
function solve(lines) {
    var max = 0
    var m2 = 0
    //print lines from 1 to n
    for( i = 0 ; i < lines.length ; i++){
        if (Number(lines[i])>max){
            // console.log(lines[i])
            m2 = max;
            max = lines[i]
        }
        else if(Number(lines[i])>m2){
            m2 = lines[i];
        }
    }
    console.log(max);
    console.log(m2);
}
