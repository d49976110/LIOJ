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

// 4
// 2 2
// 1 1
// 10 10
// 100 100
function solve(lines) {
    let n = lines[0];
    let dot = [];
    for(let i=1 ; i<=n ; i++){
        let arr = lines[i].split(" ");

        dot.push({
            x:arr[0],
            y:arr[1],
        });
    }

    // let dog = [];
    // dog.push({1:1,2:2},{3:3});
    //
    //
    // console.log(dot);
    let min = Infinity;
    let ans = [];
}


function distance(x1,y1,x2,y2) {
    let x = Number(x1)-Number(x2);
    let y = Number(y1)-Number(y2);
    let distance = Math.sqrt(x**2+y**2);
    return distance;
    // console.log(distance)

}
