const fibonacci = function(member) {
    let returnIndex =  parseInt(member) - 1;
    let fSequence = [1, 1, 2 , 3];

    if (returnIndex < 0) {
        return "OOPS";
    }

    for (let i = 4; i < member; i++) {
        fSequence[i] = fSequence[i - 2] + fSequence[i - 1];
    }
    return fSequence[returnIndex];
};

console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
// Do not edit below this line
module.exports = fibonacci;
