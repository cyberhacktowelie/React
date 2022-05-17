//Arreglos en javascript

// const arreglo = new Array( 100 );
const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arreglo.push( 1 );
// arreglo.push( 2 );
// arreglo.push( 3 );
// arreglo.push( 4 );

let arreglo2 = [...arreglo,11];
// arreglo2.push( 11 );

const arreglo3 = arreglo2.map( function(numero){
    return numero * 2;
});

console.log(arreglo);   
console.log(arreglo2);
console.log(arreglo3);