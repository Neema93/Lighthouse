const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("while loop that prints out the contents of ingredients:");
let i=0;
while(i < ingredients.length){
    console.log(ingredients[i]);
    i++;
}

console.log("for loop that prints out the contents of ingredients:");
for(let j=0; j < ingredients.length ; j++){
    console.log(ingredients[j]);
}

console.log("the contents of ingredients backwards:");
 for(let x=ingredients.length-1 ; x>=0; x--){
     console.log(ingredients[x]);
 }