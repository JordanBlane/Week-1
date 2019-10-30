class animal{
    constructor(name, typeOfPet){
        this.name = name;
        this.typeOfPet = typeOfPet;
        this.health = 100;
        this.hunger = 100;
        this.happy = 100;
        this.dead = false;
    }
    healthCheck(){
        if (this.health > 0){
            this.health --
        }else{
            this.dead = true;
        }
    }
    happyCheck(){
        if (this.happy > 0){
            this.happy = this.happy - 2
        }else{
            this.dead = true;
        }
    }
    hungerCheck(){
        if (this.hunger > 0){
            this.hunger = this.hunger - 4;
        }else{
            this.dead = true;
        }
    }
    
    
}

let rosie = new animal('rosie', 'dog');
while(!rosie.dead){
    rosie.healthCheck();
    rosie.hungerCheck();
    rosie.happyCheck();

    console.log('\n \n ---------------------------- \n')
    console.log('health: '+rosie.health)
    console.log('happy: '+rosie.happy)
    console.log('hunger: '+rosie.hunger)
    console.log('\n ---------------------------- \n \n')

}
console.log(rosie.name.toUpperCase() +' DIED\n')

console.log('----------------')
console.log('|              |')
console.log('|   X      X   |' )
console.log('|              |')
console.log("|  |________|  |")
console.log('|              |')
console.log('----------------')