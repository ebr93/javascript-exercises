const palindromes = function (string) {
    let revereString = string.split("").reverse().join("").replace(/[^\w\s]|_/g,"").toLowerCase();
    const finalReverse = revereString.replace(/ /g, "");
    console.log(finalReverse);
    let regularString = string.split(" ").join("").replace(/[^\w\s]|_/g,"").toLowerCase();
    console.log(regularString);
    if (finalReverse === regularString) {
        return true;
    } else {
        return false;
    }
};

console.log(palindromes("Animal loots foliated detail of stool lamina."));

// Do not edit below this line
module.exports = palindromes;
