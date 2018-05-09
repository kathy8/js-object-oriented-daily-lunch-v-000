// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [],
employers: []};

let customerId = 0
let mealId = 0
let deliveryId = 0
let employerId = 0

function removeDuplicates(arr, key){
  let unique_array = []
  for(let i = 0;i < arr.length; i++){
    if(unique_array.indexOf(arr[i])== -1){
      unique_array.push(arr[i])
    }
  }
  return unique_array
}
