import '@testing-library/jest-dom';
import { retornaArreglo } from '../../bases/07-deses-arr.js';

describe('Pruebas en el archivo 07-deses-arr.test.js', () => {

    test('retornaArreglo() debe devolver un array con string y numero', () => {

        const arrayEsperado =  ['ABC123', 1234];
        const array = retornaArreglo();
        const [ letras, numeros ] = retornaArreglo();


        expect(array).toEqual(arrayEsperado);
        expect(letras).toBe('ABC123');
        expect(numeros).toBe(1234);
        expect( typeof letras ).toBe('string');
        expect( typeof numeros ).toBe('number');
         

    })

});