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


function addMenuItem(resName, item) {
if (!resName.menus[item.type].includes(item))
 {
  return resName.menus[item.type].push(item)
} 
}

function removeMenuItem() {
  
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  // checkForFood
}