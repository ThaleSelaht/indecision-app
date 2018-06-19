var nameVar = "Thales";
var nameVar = "Geovani";
console.log('nameVar', nameVar);

let nameLet = "Thales";
nameLet = "Julie";
console.log('nameLet', nameLet);

const nameConst = "Frank";
console.log('nameConst', nameConst);

function getPetName() {
  var petName = "Thor";
  return petName;
}

const petName = getPetName();
console.log(petName);

//Block scoping

const fullName = 'Thales Avila';
let firstName;

if(fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
