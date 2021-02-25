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

//A123456789

function solve(lines) {
    var id = lines[0];
    var alpha = id[0];
    var alpha_number = idcode(alpha);
    var a1 = Math.floor(alpha_number/10);
    var a2 = alpha_number%10;
    var sum = a1 + a2*9
    for(let i=1 ; i<=8 ; i++){
        sum += id[i]*(9-i);
        // console.log(str);
    }
    sum += Number(id[9]);
    // console.log(sum%10);
    if(sum%10 !== 0){
        return console.log(false);
    }
    return console.log(true);
}

function idcode(s) {
    var mapping = {
        A:10,B:11,C:12,D:13,E:14,F:15,G:16,H:17,
        I:34,J:18,K:19,M:21,N:22,O:35,P:23,Q:24,
        T:27,U:28,V:29,W:32,X:30,Z:33,L:20,R:25,
        S:26,Y:31,
        KA:[12,3]
    }
    console.log(mapping.D)
    console.log(mapping["D"])
    return mapping[s];

}
// console.log(mapping[s]);
