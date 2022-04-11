const sumAll = function(integerOne, integerTwo) {
    let sum = 0;
    if (integerOne < 0 || 
            integerTwo < 0 || 
            !(typeof integerOne === "number") || 
            !(typeof integerTwo === "number")) {
        return 'ERROR'
    }

    if (integerOne < integerTwo) {
        for (let tracker = integerOne; tracker <= integerTwo; tracker++) {
            sum += tracker;
        }
        return sum;
    } else {
        for (let tracker = integerTwo; tracker <= integerOne; tracker++) {
            sum += tracker;
        }
        return sum;
    }
};

console.log(sumAll(4, "food"));
// Do not edit below this line
module.exports = sumAll;
