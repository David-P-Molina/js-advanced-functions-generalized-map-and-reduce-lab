// Add your functions here
function map (sourceArray, callbackFunction) {
    let array = []
    for (let i = 0; i < sourceArray.length; i++) {
        array.push(callbackFunction(sourceArray[i]))
    }
return array
}
function reduce (sourceArray, callbackFunction, startingValue) {
    let total;
    if (startingValue) {
        total = startingValue;
        for (let i = 0; i < sourceArray.length; i++) {
            total = callbackFunction(sourceArray[i], total)
        }
        return total 
    } else {
        total = sourceArray[0];
        for (let i = 1; i < sourceArray.length; i++) {
            total = callbackFunction(sourceArray[i], total)
    }
    return total
    }
}