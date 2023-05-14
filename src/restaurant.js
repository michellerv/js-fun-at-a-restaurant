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

function removeMenuItem(resName, item, orderT) {  
  var menus = resName.menus[orderT]

  for ( var i = 0; i < menus.length; i++) {
    if (menus[i].name === item) {
      menus.splice(i, 1) 
      return `No one is eating our ${item} - it has been removed from the ${orderT} menu!`
    } 
  }
  return `Sorry, we don\'t sell ${item}, try adding a new recipe!`
}



module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  // checkForFood
}