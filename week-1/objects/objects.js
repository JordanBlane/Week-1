// 1

const person = {
    name: 'jordan',
    age: 17,
    sayHi(){
        return('hello, my name is ' +this.name)
    }
}
console.log(person.sayHi())

// 2

const pet = {
    name: 'k',
    typeOfPet: 'dog',
    age: 2,
    colour: 'red',
    eat(){
        return(this.name + ' is eating')
    },
    drink(){
        return(this.name + ' is drinking')
    }
}
console.log(pet.eat())
console.log(pet.drink())

// 3

const coffeeShop = {
    branch: 'cambridge',
    drinks: ['coffee','tea','hot chocolate'],
    drinksPrices: ['1.00', '1.50', '9.00'],
    food: ['sandwich', 'fruit'],
    foodPrices: ['£3.00', '£9.00'],
    drinksOrdered(){
        var foodprices = []
        for(i=0;i<this.drinksPrices.length;i++){
            foodprices.push(this.drinks[i])
            foodprices.push(this.drinksPrices[i])
        }
        return('your order is \n'+foodprices)
    }
}
console.log(coffeeShop.drinksOrdered())