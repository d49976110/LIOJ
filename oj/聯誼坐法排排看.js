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


// solve([2,"yo","man",3,4,2,1]);

function solve(lines) {
    let n = Number(lines[0]);
    let arr = [];
    for(let i=1 ; i<=n ; i++){
        if(i%2 ==1){
            odd(i,arr,n);
        }else{
            even(i,arr,n);
        }
    }

    let oc = Number(lines[1]);
    // console.log(oc);
    let ocNumber = [];
    // console.log(typeof ocNumber);
    for(let i=2 ; i<=oc+1 ; i++){
        ocNumber.push(Number(lines[i]));
    }
    // console.log(typeof ocNumber);
    //
    leftseat(arr,ocNumber);
    //
    // console.log(ans);
}

function odd(i,arr,n) {
    if(i != n-1){
        return arr.push([i,i+1],[i,i+2]);
    }else {
        return arr.push([i,i+1]);
    }
}

function even(i,arr,n) {
    if(i !=n){
        return arr.push([i,i+2]);
    }
}

function leftseat(arr,ocNumber) {
    let ans = [];
    // console.log(ocNumber);
    for(let i=0 ;i<arr.length ;i++){
        // console.log(Number(arr[i][1]));

        if(ocNumber.indexOf(arr[i][0]) == -1 && ocNumber.indexOf(arr[i][1]) == -1){
            ans.push(arr[i]);
        }
    }
    console.log(ans.length);

}

// for(let i=0 ; i<ocNumber.length ; i++){
//     // console.log(ocNumber[i]);
//     return item[0]!= ocNumber[i];
// }
// // return item;
