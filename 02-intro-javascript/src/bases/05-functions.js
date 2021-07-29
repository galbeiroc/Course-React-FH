// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
// No es muy aconsejable utilizar esta forma
// funciones declaradas
function funcSaludar(name) {
  return `Hola ${name}`;
}

funcSaludar = 30;
console.log(funcSaludar);

// funciones expresadas
const lamSaludar1 = function(name) {
  return `Hola ${name}`;
}

console.log(lamSaludar1('crespo'));
// Arrow function
const lamSaludar2 = (name) => `Hola ${name}`;
console.log(lamSaludar2('Gutierrez'));

const getUser1 = () => {
  return {
    uid: 'gflj454',
    username: 'Rocendo',
  }
};
console.log(getUser1());
// return objeto implicito
const getUser2 = () => ({
  uid: 'gssf84',
  username: 'Gavilan'
});
console.log(getUser2());

const getUserActivo = (username) => ({
  uid: 'ABCD543',
  username,
});

console.log(getUserActivo('Albeiro'));


function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(3, 1, 2, 3);
console.log(arr); // [2, 4, 6]