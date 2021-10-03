// Destructuraración
// Asiganación destructurante
// Extraer propiedades de un objeto
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
  nombre: 'Albeiro',
  edad: 32,
  clave: 123,
};

// Renombrar property nombre:nameP
const { nombre:nameP, edad, clave } = persona;

console.log(nameP, edad, clave);

const extractContent = (usuario) => {
  const { nombre, edad, clave } = usuario;
  console.log(nombre, edad, clave);
}

// Desestructuración and valor default
const destrucPerson = ({ nombre, edad = 30, rango = 'Capitán' }) => {
  console.log(nombre, edad, rango);
}

const returnPersona = ({ nombre, edad = 30, rango = 'Capitán' }) => {
  return {
    nombreclave: nombre,
    age: edad,
    rango,
    latlgn: {
      lat: 14.464524,
      lgn: -91.35842,
    }
  }
}

extractContent(persona);
destrucPerson(persona);
const { nombreclave, age, latlgn: { lat, lgn } } = returnPersona(persona);
console.log(nombreclave, age);
console.log(lat, lgn);
