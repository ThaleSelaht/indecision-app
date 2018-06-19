'use strict';

// arguments object - no longer bond with arrow functions

var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};

//  const addArrow = (a, b) => {
//   console.log(arguments);  
//   return a + b;
// }
//  //console.log(addArrow(55, 1));
//  // Will print a reference error

// this keyword - no longer bond

var user = {
  name: 'Thales',
  cities: ['Cubatão', 'Santos', 'São Paulo'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
    return cityMessages;
  }
};

console.log(user.printPlacesLived());

//Chalenge Area

var multiplier = {
  numbers: [],
  multiplyBy: 0,
  multiply: function multiply(arr, mult) {
    var _this2 = this;

    this.numbers = arr;
    this.multiplyBy = mult;
    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply([1, 2, 3], 2));
