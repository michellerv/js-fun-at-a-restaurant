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



module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


