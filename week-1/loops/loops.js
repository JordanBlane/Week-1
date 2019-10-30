// // --- challenge 1 ---

// function multi(num){
//     var step = num
//     for (i=0;i<10;i++){
//         console.log(num)
//         num = num + step
//     }

// }

// multi(2);


// --- challenge 2 ---

// function letterstonum(str){
//     str.split(' ').join('')
//     var arr = []
//     var alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     for (i = 0; i < str.length; i ++){
//         var chari = str.charAt(i);
//         if (alphabet.indexOf(chari) > -1){
//             arr.push(alphabet.indexOf(chari)+1)
//         }
//     }
//     return arr;
// }
// console.log(letterstonum('asdasdffddsf'));

// -- challenge 3 --

// var max = 100;
// var primes = [2,3];
// var numbers = [0,0]
// var dice  = 0;

// for (i = 5; i <= max; i += 2){
//     if(primes.every(function(p) { return i % p;})) {
//         primes.push(i);
//         numbers.push(0);    
//     }
// }
// for(i=0;i<numbers.length;i++){
//     numbers[i] = primes[i];
//     if(i > 0){
//         numbers[i-1] = 0;
//     }
//     console.log(numbers)
// }


// ---- toms challenge ----
var x = 0;
var total = 0;
var len = 1000;
var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
var newarr = [];
function inWords (num) {
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + '' + a[n[1][1]]) + 'crore' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + '' + a[n[2][1]]) + 'lakh' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + '' + a[n[3][1]]) + 'thousand': '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + '' + a[n[4][1]]) + 'hundred': '';
    str += (n[5] != 0) ? ((str != '') ? 'and' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + '' : '';
    return str;
}

for (i=0;i<len;i++){
    console.log(inWords(i+1))
    x = inWords(i+1).split(' ').join('')
    total = total + x.length-1;
}
console.log(total)