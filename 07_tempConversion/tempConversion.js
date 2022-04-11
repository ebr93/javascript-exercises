const ftoc = function(temperatureF) {
  temperatureF = Math.round((temperatureF - 32) * 5/9 * 10) / 10;
  return temperatureF;
};

const ctof = function(temperatureC) {
  temperatureC = Math.round((temperatureC * (9/5) + 32) * 10) / 10;
  return temperatureC;
};

console.log(ftoc(32));
console.log(ftoc(64));


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
