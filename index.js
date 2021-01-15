const drivers = ["Tony", "Chris", "Silvio","Paulie", "Bobby"]

const returnFirstTwoDrivers = function(array){
   let newArr = array.slice(0,2)
   return newArr
}

const returnLastTwoDrivers = (array) => {
    let newArr = array.slice(array.length -2)
    return newArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int){
    return function(fare){
       return int * fare
    }
}

const fareDoubler = function(fare){
   return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(array, firstOrLast){
    return firstOrLast(array)
}