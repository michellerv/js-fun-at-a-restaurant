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
  return ingredients.push(topping)
}


function formatPrice() {

}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  // decreasePrice,
  // createRecipe
}


