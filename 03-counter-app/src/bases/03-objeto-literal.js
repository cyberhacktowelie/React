
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,
    direction: {
        calle: 'Calle falsa 123',
        ciudad: 'Ciudad falsa',
        pais: 'Pais falso',
        zip: 'Zip falso',
        lat: 0,
        longitude: 0,
    }
};

console.log(persona);
console.log( {persona });
console.table( {persona } );


const persona2 = persona; //Copia por referencia


persona2.nombre = 'Juan2';

console.log(persona);

console.log(persona2);



const persona3 = {...persona}; //Copia por valor
persona3.nombre = 'Juan3';
console.log(persona);
console.log(persona3);