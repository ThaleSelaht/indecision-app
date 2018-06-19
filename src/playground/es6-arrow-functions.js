// const square = function (x) { 
//   return x*x;
// };

// // const squareArrow = (x) => { 
// //   return x*x;
// // };

// const squareArrow = (x) => x*x;
// console.log(square(8));
// console.log(squareArrow(6));

const getFirstName = (fullName) => {
  if(fullName) {
    return fullName.split(' ')[0];
  }
};

const getFirstName2 = (fullName) => (fullName) ? fullName.split(' ')[0] : null;

console.log(getFirstName('Thales Costa'));