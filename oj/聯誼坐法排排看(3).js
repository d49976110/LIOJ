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

//3(n-1)+1 排列可能性

function solve(lines) {
    let n =Number(lines[0]); //總坐位數
    
    //座位可能排列
    let arr = []; 
    for(let i=1 ;i<=n-2 ; i++){
        arr.push([i,i+2]);
    }
    for(let j=1 ; j<=n-1 ;j+=2){
        arr.push([j,j+1]);
    }

    //佔據的座位
    let accupy = []; 
    for(let i=2 ; i<lines.length ; i++){
        accupy.push(Number(lines[i]));
    }
   
    //排除掉佔據的座位
    let ans = []; 
    // for(let i=0 ;i<arr.length ; i++){
    //     if(accupy.includes(arr[i][0])==false && accupy.includes(arr[i][1])==false){
    //         ans.push(arr[i]);
    //     }
    // }
    for(let i=0 ; i<arr.length ; i++){
    	for(let j=0 ; j<accupy.length ; j++){
        if(arr[i][0] != accupy[j] || arr[i][1] != accupy[j])
          ans.push(arr[i]);
        }
    }

    console.log(ans.length);

}

