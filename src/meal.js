function nameMenuItem(name) {
return `Delicious ${name}`
}

function createMenuItem(name, price, type) {

 return {
  name: name,
  price: price,
  type: type
 }
}

function addIngredients(topping, ingredients) {
  if (!ingredients.includes(topping))
  //"!" is a logical NOT operator that takes what is true and makes it false. 
  //It is working on the ingredients array.
  //The .includes method determines if something is included in the array.
  // The if statement says, if a topping is not already included in the ingredient array
  return ingredients.push(topping)
} // then it can be pushed.
//or
// function addIngredients(topping, ingredients) {
//   if (ingredients.includes(topping) === false)
//   return ingredients.push(topping)
// }

function formatPrice(price) {
return `$${price}`
}

function decreasePrice(price) {
  return price - price * .10
}

function createRecipe(title, ingredients, type) {
return {
  title: title,
  ingredients: ingredients,
  type: type
}
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


