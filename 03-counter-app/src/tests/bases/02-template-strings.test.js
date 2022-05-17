import '@testing-library/jest-dom';
import { getSaludo } from '../../bases/02-template-string.js';

describe('Pruebas en el archivo 02-template-strings.test.js', () => {

    test('getSaludo() debe devolver Hola Fernando', () => {

        const nombre = 'Fernando';
        const saludo = getSaludo(nombre);   
        // 3. Observar el comportamiento
        expect(saludo).toBe('Hola ' + nombre);// ===

    })

    test('getSaludo() debe devolver Hola Mundo si no hay argumentos', () => {

        const saludo = getSaludo();   
        // 3. Observar el comportamiento
        expect(saludo).toBe('Hola Mundo');// ===

    })

});
