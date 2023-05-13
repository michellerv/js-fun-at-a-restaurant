function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast:[],
      lunch: [],
      dinner: []
    }
  }
}




module.exports = {
  createRestaurant, 
  // addMenuItem,
  // removeMenuItem,
  // checkForFood
}