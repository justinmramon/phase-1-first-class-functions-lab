// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']){
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(soul){
    return function fareMultiplier(glo){
        return soul * glo
    }
}

const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier*2
}

const fareTripler = function(createFareMultiplier){
    return createFareMultiplier*3
}

function selectDifferentDrivers(drivers, functions){
    return functions(drivers)
}