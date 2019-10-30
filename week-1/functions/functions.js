const readline = require('readline');

let balance = 1000;
let pinnumber = 999

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stout
})

function withdraw(balance){
    console.log('your balance is ' +balance);
    console.log('enter how much you want to withdraw')
    rl.question('how much do you want to withdraw? ', (answer) => {
        if (answer <= balance){
            balance -= answer
            console.log('done!')
            rl.pause()
        }
        else{
            console.log('you dont have enough')
            rl.pause()
        }
    })

}
console.log('enter your pin')
rl.question('what your pin? ', (answer) => {
    if (answer == pinnumber){
        console.log('pin correct')
        withdraw(balance);
    }else{
        console.log('wrong pin');
        rl.pause();
    }
})