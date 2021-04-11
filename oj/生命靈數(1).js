var readline = require('readline');

var lines = []
var rl = readline.createInterface({input: process.stdin});

rl.on('line', function (line) {
    lines.push(line)
});

rl.on('close', function () {
    solve(lines)
});
//1*1=1
function solve(lines) {
    let arr = lines[0].split(" ");
    let num = ""
    for (let i = 0; i < arr.length; i++) {
        num += arr[i];
    }
    let result = num.toString();
    //    result = Math.floor(result/10);

    while (Math.floor(result / 10) !== 0) {
        let ans = 0;
        for (let i = 0; i < result.length; i++) {
            ans += Number(result[i]);
            // console.log(ans);
        }
        // console.log(ans);
        result = ans.toString();
        // console.log(result);
    }
    console.log(result);
}
