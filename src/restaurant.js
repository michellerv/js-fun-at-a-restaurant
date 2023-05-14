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

function checkForFood(resName, item) {
  var menus = resName.menus[item.type]

  for ( var i = 0; i < menus.length; i++) {
    if (menus[i].name === item.name) {
      return `Yes, we're serving ${item.name} today!`
    } 
  }
  return `Sorry, we aren\'t serving ${item.name} today.`

}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}