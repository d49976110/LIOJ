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
    let n = lines[0];
    let dot = [];
    for(let i=1 ; i<=n ; i++){
        let arr = lines[i].split(" ");
        dot.push({
            x:Number(arr[0]),
            y:Number(arr[1])
        });
    }
        // console.log(dot)
    let min = Infinity;
    // console.log(typeof min)
    let ans = null;

    for(let i=0 ; i<dot.length ; i++){
        for(let j=i+1 ; j<dot.length ; j++){
            let distance = cal(dot[i].x,dot[i].y,dot[j].x,dot[j].y);
            if(distance < min){
                min = distance;
                ans = {
                    x1 : dot[i].x,
                    y1 : dot[i].y,
                    x2 : dot[j].x,
                    y2 : dot[j].y,
                }
            }
        }
    }
    if(ans.x1 < ans.x2){
        console.log(ans.x1+" "+ans.y1);
        console.log(ans.x2+" "+ans.y2);
    }else if (ans.x1>ans.x2) {
        console.log(ans.x2+" "+ans.y2);
        console.log(ans.x1+" "+ans.y1);
    }else{
        if(ans.y1<ans.y2){
            console.log(ans.x1+" "+ans.y1);
            console.log(ans.x2+" "+ans.y2);
        }
        else {
            console.log(ans.x2+" "+ans.y2)
            console.log(ans.x1+" "+ans.y1)
        }
    }
}

function cal(x1,y1,x2,y2) {
    let result = Math.sqrt((x1-x2)**2+(y1-y2)**2);
    return result;
}
// function abs(n) {
//     if(n<0){
//         return -n;
//     }
//     return n;
// }
