function createRestaurant(name) {
  return {
    name: name,
    menus: {
    types: {
      breakfast:[],
      lunch: [],
      dinner: []
    }
  }
}
}

module.exports = {
  createRestaurant, 
  // addMenuItem,
  // removeMenuItem,
  // checkForFood
}