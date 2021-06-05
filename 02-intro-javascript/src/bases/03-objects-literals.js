const person = {
  named: 'Albeiro',
  lastName: 'Crespo',
  age: 32,
  address: {
    city: 'California',
    zip: 12545,
    lat: 14.35636,
    lon: 74.25852,
  }
};

console.log(person);

//Copia referencia
/**
 * const person1 = person;
 * person1.named = 'Peter'
 * console.log(person1);
 * console.log(person);
*/

//Para evitar la copia por referencia
const person2 = { ...person };
console.log(person2);

console.log(person);
console.log(person.named);     //dot notation
console.log(person['named']);  //bracket notation

/**
 * key: value
 */
