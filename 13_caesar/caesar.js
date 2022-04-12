

const caesar = function(word, number) {
    let numberArray = [];
    let newWord = [];
    let finalWord = []
    word = word.split('');
    word.forEach(letter => numberArray.push(alphabetToNumber(letter)));
    console.log(numberArray);
    numberArray.forEach(letterNumber => newWord.push(cipher(number, letterNumber)));
    console.log(newWord);
    console.log(numberArray);
    newWord.forEach(number => finalWord.push(numberToLetter(number)));
    console.log(finalWord);
    let stringCaesar = finalWord.join('');
    console.log(stringCaesar);
}

caesar('Hello, World!', 75);

function cipher(number, letterNumber) {
    if (letterNumber >= 1 && letterNumber <= 25) {
        if (letterNumber + number < 1) {
            let adjuster = letterNumber + number;
            return 25 - adjuster;
        } else if (letterNumber + number > 25) {
            let adjuster = letterNumber + number - 25;
            return 1 + adjuster;
        } else {
            return number + letterNumber;
        }
    } else if (letterNumber >= 26 && letterNumber <= 52) {
        if (letterNumber + number < 26) {
            let adjuster = 26 - (letterNumber + number);
            return 52 - adjuster;
        } else if (letterNumber + number > 52) {
            let adjuster = letterNumber + number - 52;
            return 26 + adjuster;
        } else {
            return number + letterNumber;
        }
    } else if (letterNumber >= 53 && letterNumber <= 55) {
        return letterNumber;
    }
}

function lowerCaseLetters(letterNumber) {

}

function alphabetToNumber(letter) { 
    if (letter === "a") { 
        return (1);
    } else if (letter === "b") {
        return (2);
    } else if (letter === "c") {
        return (3);
    } else if (letter === "d") {
        return (4);
    } else if (letter === "e") {
        return (5);
    } else if (letter === "f") {
        return (6);
    } else if (letter === "g") {
        return (7);
    } else if (letter === "h") {
        return (8);
    } else if (letter === "i") {
        return (9);
    } else if (letter === "j") {
        return (10);
    } else if (letter === "k") {
        return (11);
    } else if (letter === "l") {
        return (12);
    } else if (letter === "m") {
        return (13);
    } else if (letter === "n") {
        return (14);
    } else if (letter === "o") {
        return (15);
    } else if (letter === "p") {
        return (16);
    } else if (letter === "q") {
        return (17);
    } else if (letter === "r") {
        return (18);
    } else if (letter === "s") {
        return (19);
    } else if (letter === "t") {
        return (20);
    } else if (letter === "u") {
        return (21);
    } else if (letter === "v") {
        return (22);
    } else if (letter === "w") {
        return (23);
    } else if (letter === "x") {
        return (24);
    } else if (letter === "y") {
        return (25);
    } else if (letter === "z") {
        return (26);
    } else if (letter === "A") {
        return (27);
    } else if (letter === "B") {
        return (28);
    } else if (letter === "C") {
        return (29);
    } else if (letter === "D") {
        return (30);
    } else if (letter === "E") {
        return (31);
    } else if (letter === "F") {
        return (32);
    } else if (letter === "G") {
        return (33);
    } else if (letter === "H") {
        return (34);
    } else if (letter === "I") {
        return (35);
    } else if (letter === "J") {
        return (36);
    } else if (letter === "K") {
        return (37);
    } else if (letter === "L") {
        return (38);
    } else if (letter === "M") {
        return (39);
    } else if (letter === "N") {
        return (40);
    } else if (letter === "O") {
        return (41);
    } else if (letter === "P") {
        return (42);
    } else if (letter === "Q") {
        return (43);
    } else if (letter === "R") {
        return (44);
    } else if (letter === "S") {
        return (45);
    } else if (letter === "T") {
        return (46);
    } else if (letter === "U") {
        return (47);
    } else if (letter === "V") {
        return (48);
    } else if (letter === "W") {
        return (49);
    } else if (letter === "X") {
        return (50);
    } else if (letter === "Y") {
        return (51);
    } else if (letter === "Z") {
        return (52);
    } else if (letter === " ") {
        return (53);
    } else if (letter === "!") {
        return (54);
    } else if (letter === ",") {
        return (55);
    }
}

function numberToLetter(number) {
    if (number === 1) {
        return "a";
    } else if (number === 2) {
        return "b";
    } else if (number === 3) {
        return "c";
    } else if (number === 4) {
        return "d";
    } else if (number === 5) {
        return "e";
    } else if (number === 6) {
        return "f";
    } else if (number === 7) {
        return "g"; 
    } else if (number === 8) {
        return "h";
    } else if (number === 9) {
        return "i";
    } else if (number === 10) {
        return "j";
    } else if (number === 11) {
        return "k";
    } else if (number === 12) {
        return "l";
    } else if (number === 13) {
        return "m"
    } else if (number === 14) {
        return "n";
    } else if (number === 15) {
        return "o";
    } else if (number === 16) {
        return "p";
    } else if (number === 17) {
        return "q";
    } else if (number === 18) {
        return "r";
    } else if (number === 19) {
        return "s";
    } else if (number === 20) {
        return "t";
    } else if (number === 21) {
        return "u";
    } else if (number === 22) {
        return "v";
    } else if (number === 23) {
        return "w";
    } else if (number === 24) {
        return "x";
    } else if (number === 25) {
        return "y";
    } else if (number === 26) {
        return "z";
    } else if (number === 27) {
        return "A";
    } else if (number === 28) {
        return "B";
    } else if (number === 29) {
        return "C";
    } else if (number === 30) {
        return "D";
    } else if (number === 31) {
        return "E";
    } else if (number === 32) {
        return "F";
    } else if (number === 33) {
        return "G";
    } else if (number === 34) {
        return "H";
    } else if (number === 35) {
        return "I";
    } else if (number === 36) {
        return "J";
    } else if (number === 37) { 
        return "K";
    } else if (number === 38) {
        return "L";
    } else if (number === 39) {
        return "M";
    } else if (number === 40) {
        return "N"; 
    } else if (number === 41) {
        return "O";        
    } else if (number === 42) {
        return "P";
    } else if (number === 43) {
        return "Q";
    } else if (number === 44) {
        return "R";
    } else if (number === 45) {
        return "S";
    } else if (number === 46) {
        return "T";
    } else if (number === 47) {
        return "U";
    } else if (number === 48) {
        return "V";
    } else if (number === 49) {
        return "W";
    } else if (number === 50) {
        return "X";
    } else if (number === 51) {
        return "Y";
    } else if (number === 52) {
        return "Z";
    } else if (number === 53) {
        return " ";
    } else if (number === 54) {
        return "!"
    } else if (number === 55) {
        return ",";
    }
}

// Do not edit below this line
module.exports = caesar;
