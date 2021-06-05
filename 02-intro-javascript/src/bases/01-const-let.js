/** Variables const - let: => Son variables de scope
* const => Permite crear la variables que no se van a renombrar
* let   => Permite renombrar variables
*/

const named = 'Albeiro';
const lastName = 'Crespo';

let givenValue = 5;
givenValue = 4;

console.log('=>', named, lastName, givenValue);

if (true) { //block
  const named = 'Peter';
  let givenValue = 15;

  console.log(named, givenValue);
}

console.log('=>', named, givenValue);
