var myString = "Mama Mia Here We Go Again"
console.log(myString)
console.log('there is an a at')
for (i = 0; i < myString.length; i++){
    if (myString.charAt(i).includes('a')){
        console.log(i+1);
    }
}