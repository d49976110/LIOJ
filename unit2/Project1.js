
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
//字串反轉(ok)
// function solve(lines) {
//     var str = lines[0];
//     var x = str.length;
//     var y = "";
//     for( i=x-1 ; i>=0 ; i-- ){
//
//         y += str[i];
//     }
//     console.log(y);
// }

//字串反轉
function solve(lines) {
    var array = lines[0];
    // console.log(array);
    var x = array.length;
    var y ="";

    for( i=x-1 ; i>=0 ; i-- ){
        y = y+array[i];
    }
    // console.log(y);
}


//陣列總和
// function solve(lines) {
//     var array = lines[0].split(",");
//     var x = array.length;
//     var y = 0;
//     for( i=0 ; i<x ; i++ ){
//        y += Number(array[i]);
//     }
//     console.log(y);
// }

//找出最大值
// function solve(lines) {
//     var x = lines[0];
//     // console.log(lines.length)
//     for (i=0 ; i<lines.length ; i++){
//
//         if (Number(lines[i]) > x){
//              x = Number(lines[i]);
//             // console.log(lines[i]);
//         }
//     }
//     console.log(x);
// }

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
