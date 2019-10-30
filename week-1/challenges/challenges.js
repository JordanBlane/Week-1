// ---- challenge 1 -----

// var str = 'dassadds';
// var num = 123311312;
// var bool = true;
// var arr = [1,2,3,4];
// var bal = 10000;
// var amnt = 10;

// //adds the next number to the arr
// function addTo(x){
//     x.push(x.length+1);
// }
// //printing everything in the array
// function printArr(x){
//     for(i=0;i<x.length;i++){
//         console.log(x[i])
//     }
// }

// //seeing if the 2 arguments parsed if ones smaller than the other
// function withdraw(x, y){
//     if (y < x){
//         console.log('withdrawed')
//     }else{
//         console.log('not enough money')
//     }
// }

// console.log(addTo(arr))
// printArr(arr)
// withdraw(bal,amnt)

//challenge 1 - fruit machine

// function fruitMachine(){
//     fruits = ['apple','pear','melon','grape'];
//     picker = Math.random() * fruits.length;
//     picker = Math.ceil(picker)
//     for (i=0;i<3;i++){
//         picker = Math.random() * fruits.length;
//         picker = Math.floor(picker)
//         console.log(fruits[picker])
//     }
// }

// fruitMachine()


//challenge 2 -- see if 2 numbers in an array can be added to reach a target number

// let numbers = [1,4,6,4,6,4,3,2,5,5,9]


// function add(arr, tot){
//     var current;
//     for (i=0;i<arr.length;i++){
//         current = arr[i];
//         for(a=0;a<arr.length;a++){
//             if(current !== arr[a]){
//                 if(arr[i] + arr[a] == tot){
//                     console.log(arr[a] +' + ' +arr[i] +' = ' +tot)
//                 } 
//             }
//         }
//     }
// }

// add(numbers, 13)

//challenge 3

// function add(str){
//     var arr = str.split('.')
//     for(i=0;i<arr.length;i++){
//         if(i = arr.length-1){
//             if(arr[i] == 9){
//                 arr[i-1] ++
//                 arr[i] = 0;
//             }
//             else{
//                 arr[i]++
//             }
//     }
//     arr = arr.join('.')
//     return arr
// }
// }

// console.log(add('1.5.9'))

// let words = 'Abba Is Cool'

// function reverse(str){
//     arr = str.split('')
//     for(i=0;i<arr.length;i++){
//         if(arr[i] == arr[i].toUpperCase()){
//             arr[i] = arr[i].toLowerCase()
//         }else{
//             arr[i] = arr[i].toUpperCase()
//         }
//     }
//     arr = arr.join('')
//     console.log(arr)
// }

// reverse(words)

//4

// let socks = ['red','red','blue','blue'],
//     count = {},
//     result;

// socks.reduce((a,b) => {
//     var key = [a,b].join('|');
//     count[key] = (count[key] || 0) + 1;
//     return b;
// });

// result = Object.values(count)

// console.log(count)
// console.log(result)


//5
// let words = 'duck duck duck duck duck'
// function rev(str){
//     for(i=0;i<str.length;i=i+2){
//         str[i] = str[i].split('').reverse().join('')
//     }
//     console.log(str)
// }

// rev(words)



//fibbonachi even numbers

// numbers = [1,2]

// function test(arr, total){
//     console.log('Even numbers in the fibbonaci series up to the ' +total +'th number in the sequence')
//     for(i=0;i<total;i++){
//         arr.push(arr[i+1] + arr[i])
//     }
//     for(i=0;i<total;i++){
//         if (arr[i] % 2 === 0){
//             console.log('' +arr[i])
//         }
//     }
// }

// test(numbers, 20)

//14

// let word = 'Hello'

// word = word.toLowerCase();

// for(i=0;i<word.length;i++){
//     str = word.split('')
//     str[i] = str[i].toUpperCase()
//     str = str.join('')
//     console.log(str)
// }

//15
// let piles = []

// function setPiles(){
//     for(i=0;i<3;i++){
//         x = Math.random() * 20
//         x = Math.ceil(x)
//         piles.push(x)
//     }
// }
// setPiles()

// function fluffer(){
//     a = Math.random() *3
//     a = Math.ceil(a)
//     b = Math.random() *3
//     b = Math.ceil(b)
//     piles[a-1] = piles[a-1] - b
//     console.log('fluffers removed ' +b +' chips from pile '+a +'\n')
// }
// function fred(){
//     a = Math.random() *3
//     a = Math.ceil(a)
//     b = Math.random() *3
//     b = Math.ceil(b)
//     piles[a-1] = piles[a-1] - b
//     console.log('fred removed ' +b +' chips from pile '+a)
// }

// var game = true

// while(game){
//     if(piles[0] <= 0 || piles[1] <= 0 || piles[2] <= 0){
//         game = false
//     }else{
//         fluffer()
//         fred()
//         console.log(piles)
//     }
// }


//factors of a number

// function factors(num){
//     var factor = []
//     x = 0;
    
//     for(var i = 1; i<= num; i++){
//         x = num/i;
//         if(x === Math.floor(x)){
//             factor.push(i)
//         }
//     }
//     console.log('factors of ' +num +'\n' +factor)
// }
// factors(100)