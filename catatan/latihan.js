const names = [
    'Asep',
    'Sahrudin',
    'Bagus',
    'Alisa'
];



// for (let i = 0; i < names.length; i++) {
//     namesToUpperCase[i] = names[i].toUpperCase();
// }

const namesToUpperCase = names.map(name => name.toUpperCase());

console.log(namesToUpperCase);