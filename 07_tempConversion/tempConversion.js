
// See Wikipedia - Celsius = "Melting and boiling points of water" for 
// conversion formulae.

const convertToCelsius = function(temp) {
  const converted = (temp - 32) * (5 / 9);
  return Math.round(converted * 10) / 10; 
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
