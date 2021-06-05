const array = [1, 2, 3, 4];

console.log(array);

//Copia referencia
/**
 * const array1 = array;
 * array1.push(5);

 * console.log(array1); //[1, 2, 3, 4, 5]
 * console.log(array);  //[1, 2, 3, 4, 5]
*/

//Para evitar la copia por referencia
const array2 =[...array, 5];
console.log(array2);


const array3 = array2.map((num) => num * 2);
console.log(array3);