//challenge 1

let password = 'dhaudasui';

if (password.length < 8){
    console.log('password too short');
}else{
    console.log(password);
}

//challenge 2

let num = 5

if (num % 3 === 0 || num % 5 === 0){
    console.log('this number is divisible by 3 or 5')
}
else{
    console.log('this number is not divisible by 3 or 5')
}

//challenge 3

switch(true){
    case (num % 3 === 0 && num % 5 === 0):
        console.log('fizz buzz')
        break;
    case (num % 3 === 0):
        console.log('fizz')
        break;
    case (num % 5 === 0):
        console.log('buzz')
        break;
}

//challenge 4
var strify = num.toString()
var splitstr = strify.split('')
var reverse = splitstr.reverse()
var join = reverse.join('')

console.log(join);

//challenge 5

let Time = 4;
let placeOfWork = 'Work';
let homeTown = 'home';

if (Time < 9 && Time >= 8){
    console.log('at ' +Time +' I am commuting');
}
else if(Time >= 9 ){
    console.log('at ' +Time +' I am Working');
}
else{
    console.log('i am at home');
}

//challenge 6

var str = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshiha'
var vowels = /[aeiou]/
var lastVowel;

for (i = 0; i < str.length; i ++){
    if (str[i].match(vowels)){
        lastVowel = str[i];
    }
}
console.log(lastVowel)


//challenge 7

var word = 'asdass';
if (word.charAt(0).match(word.charAt(word.length-1))){
    console.log('they match')
}else{
    console.log('they dont match')
}

//challenge 8

var num1 = 3;
var num2 = 2;

var sum = num1 * num2

if (sum % 2 === 0){
    console.log('its even')
}else{
    console.log('its odd')
}