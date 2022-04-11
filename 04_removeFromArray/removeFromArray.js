const removeFromArray = function(array, para1, para2, para3, para4) {
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        if (value === para1 || value === para2 ||value === para3 ||value === para4) {
            array.splice(i, 1); // modifies object in array at index, 2nd number informs how many objects will be removed
            i = i - 1;  // had to do this just in case the parameters cause an error, due to array becoming too small
        }
    }
    return array;
};
console.log(removeFromArray([1,2,3,4], 4, 3));
// Do not edit below this line
module.exports = removeFromArray;
