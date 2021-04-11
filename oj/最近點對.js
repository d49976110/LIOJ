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
    let arr = [] ;
    let temp = Infinity ;
    let ans = []; 
    for(let i=1 ; i<n ; i++){
        for(let j=i+1 ; j<=n ;j++){
            let dis = distance(lines[i],lines[j]);
            // console.log(lines[i],lines[j]);
            if(dis<temp){
                arr[0] = lines[i];
                arr[1] = lines[j];
                temp = dis ; 
            }
        }
    }

    if(arr[0][0]> arr[1][0]){
        ans[0] = arr[1];
        ans[1] = arr[0];
        // console.log(ans);
    }else if(arr[0][0] < arr[1][0]){
        // console.log(arr);
        ans[0] = arr[0];
        ans[1] = arr[1];
        
    }else{
        if(arr[0][2] > arr[1][2]){
            ans[0] = arr[1];
            ans[1] = arr[0];
            // console.log(ans);
        }else{
            ans[0]= arr[0];
            ans[1]= arr[1];
        }
    }

    console.log(ans[0][0]+" "+ans[0][2]);
    console.log(ans[1][0]+" "+ans[1][2]);
}



function distance(arr1,arr2){
    arr1 = arr1.split(" ");
    arr2 = arr2.split(" ");
    // console.log(arr1,arr2);
	let x = (arr1[0]-arr2[0])**2;
	let y = (arr1[1]-arr2[1])**2;

	let num = Math.sqrt(x+y);
	return num ; 
}