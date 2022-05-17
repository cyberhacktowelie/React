const nombre = 'Juan';
const apellido = 'Perez';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}
${ 1 + 2 }`;
console.log(nombreCompleto);


function getSaludo(nombreSaludo) {
    return `Hola ${nombreSaludo}`;
}

console.log(getSaludo(nombre));