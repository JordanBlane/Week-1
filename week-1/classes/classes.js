// //challenge 1
// class animals{
//     constructor(){
//         this.hunger = 100;
//         this.health = 100;
//     }
// }


// class bunny extends animals{
//     constructor(name){
//         this.name = name;
//         this.hops = 0;
//     }
//     get name(){
//         return this.name;
//     }
//     get hops(){
//         return this.hops;
//     }
//     increaseHops(){
//         this.hops++;
//     }
// }


// const rosie = new bunny('rosie');
// const lizzy = new bunny('lizzy');
// console.log(rosie.name)
// console.log(lizzy.name)



//challenge 2

class car{
    constructor(car,reg,nohp){
        this.car = car;
        this.reg = reg;
        this.nohp = nohp;
        this.total = 0;
    }
    pay(){
        var i;
        for(i=0;i<this.nohp;i++){
            this.total = this.total + 1.50
        }
        console.log(this.car +' with the registration '+this.reg +' has been parked for ' +this.nohp +' hours.' +' the total is £' +this.total)
    }

}

var carr = new car('Name', 'a38h7b', 5);
carr.pay();