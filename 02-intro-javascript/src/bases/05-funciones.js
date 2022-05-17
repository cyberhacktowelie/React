
// Funciones en javascript
const saludar = function(nombre) {
    return `Hola ${nombre}`;
}   

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// console.log(saludar('Juan'));

console.log(saludar);
console.log(saludar2);
console.log(saludar3);

console.log(saludar3('Juan'));

console.log(saludar4());


const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
};

console.log(getUser());

const getUser2 = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
 });

    console.log(getUser2());



const user = getUser();
console.log(user);


//Tarea 
function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
}   

const usuarioActivo = getUsuarioActivo('Juan');
console.log(usuarioActivo);

//1 Transformar la funcion getUsuarioActivo a una funcion flecha
//2 Retornar un objeto implícito
//3 Pruebas 

const getUsuarioActivo2 = (nombre) => ({uid: 'ABC567', username: nombre});
console.log(getUsuarioActivo2('Juan'));