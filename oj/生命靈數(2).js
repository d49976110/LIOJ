var readline = require('readline');

var lines = []
var rl = readline.createInterface({input: process.stdin});

rl.on('line', function (line) {
    lines.push(line)
});

rl.on('close', function () {
    solve(lines)
});

function solve(lines) {
    let arr = lines[0].split(" ");
    let num = "" //總數字串
    for (let i = 0; i < arr.length; i++) {
        num += arr[i];
    }

    let result = addEachNumber(num);
    // console.log(result);

    while (Math.floor(result / 10) !== 0) {
        result = addEachNumber(result);
        //  console.log(result);

    }
    console.log(result);
}

function addEachNumber(m) {
    let sum = 0;
    while (Number(m) !== 0) {
        n = m % 10;
        sum += n;
        m = Math.floor(m / 10);
    }
    // console.log(sum);
    return sum;
}

// to string解 
// function addEachNumber(n) {
//     let sum = 0 n = n.toString();
//     for (let i = 0; i < n.length; i++) {
//         sum += Number(n[i]);
//     }
//     return sum;
// }

// 數學解
