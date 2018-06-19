 // arguments object - no longer bond with arrow functions

 const add = function (a, b) {
   console.log(arguments);  
   return a + b;
 }

//  const addArrow = (a, b) => {
//   console.log(arguments);  
//   return a + b;
// }
//  //console.log(addArrow(55, 1));
//  // Will print a reference error
 
 // this keyword - no longer bond

 const user = {
  name: 'Thales',
  cities: ['Cubatão', 'Santos', 'São Paulo'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
    return cityMessages;
  }
};

console.log(user.printPlacesLived());


//Chalenge Area

const multiplier = {
  numbers: [],
  multiplyBy: 0,
  multiply(arr, mult) {
    this.numbers = arr;
    this.multiplyBy = mult;
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply([1,2,3], 2));
