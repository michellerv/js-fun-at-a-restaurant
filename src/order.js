function takeOrder(orders, deliveryOrders) {
  if (deliveryOrders.length <= 2) 
    return deliveryOrders.push(orders)
}


function refundOrder(orderNumber, deliveryOrders) {
  for ( var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1)
      break;
      } 
    }
  }

function listItems(deliveryOrders) {
 var array = []
for (var i = 0; i < deliveryOrders.length; i++){
   array.push(deliveryOrders[i].item)
  } 
  return array.join(', ')
}

function searchOrder(deliveryOrders, item) {
var array = []
  for (var i = 0; i < deliveryOrders.length; i++) {
    array.push(deliveryOrders[i].item)
 } {
if (array.includes(item)) {
  return true
  } 
  else {
    return false
  }
  }
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}