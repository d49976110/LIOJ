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

function solve(lines) {
    let arr  = lines[0];
    let tem = arr.split(" ");
    let date = tem.join("");
    let sum = 0

    for(let i=0 ;  i<date.length ; i++){
        sum += Number(date[i])
    }
    let ans = lifenumber(sum);
    // console.log(ans);


}

//解法一
function lifenumber(n) {

    while( Math.floor(n/10) !== 0){
        n = n%10 + Math.floor(n/10);
    }
    return n ;
}

//解法二
//把數列全部加總

// function addDigis(n) {
//     let sum = 0;
//     while(n != 0 ){
//         sum += sum%10;
//         n = Math.floor(n/10);
//     }
//     return sum;
// }
