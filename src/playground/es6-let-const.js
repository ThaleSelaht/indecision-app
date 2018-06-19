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

const getFirstName = (fullName) => {
  if(fullName) {
    firstName = fullName.split(' ')[0];
    return firstName;
  }
};

const getFirstName2 = (fullName) => (fullName) ? firstName = firstName.split(' ')[0] : null;
console.log(getFirstName2(fullName));
