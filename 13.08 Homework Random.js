let randomstring = require("randomstring");

function getRandomString(length) {
    return randomstring.generate({
        length: length,
        charset: 'alphabetic'});
}

console.log(getRandomString(25));

function getRandomNumber(digits) {
    return Math.floor(Math.random() * Math.pow(10, digits));
}

console.log(getRandomNumber(15));
