const named = 'Albeiro';
const lastName = 'Crespo';

const fullName = `
${named}
${lastName}
${1 + 1}
`;

console.log(fullName);

function greeting() {
  return 'Hello world';
}

console.log(`This is a text: ${greeting()}`);
