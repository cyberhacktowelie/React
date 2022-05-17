import { getHeroeById } from './08-imp-exp.js';

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {

//         //Tarea 
//         // importen el 
        
//         const heroe = getHeroeById(6);
//         // const heroe = getHeroeById(9);
//         // console.log(heroe);
//         // console.log('Termino la promesa 2 segundos despues');
//         if (heroe) {
//             resolve(heroe);
//         } else {
//             reject('No se encontro el heroe');
//         }
//         // resolve(heroe);
//         // resolve(heroe2);
//     }, 2000);

// } );

// promesa.then( (heroe) => {    //then es una funcion que recibe una funcion como parametro
//     console.log('Heroe: ', heroe);
// }).catch( (error) => { console.warn('Error: ', error);});


export const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se encontro el heroe');
            }
        }, 1500);
    });
}

// getHeroeByIdAsync(6)
//     .then( console.log)
//     .catch( console.warn);