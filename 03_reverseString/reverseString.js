const reverseString = function(string) {
    // split turns the String into an array by splitting in between letters
    // reverse changes the order of array
    // join puts together the array by spaces, if let blank it uses commas
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
