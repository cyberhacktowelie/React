import { getHeroeByIdAsync } from '../../bases/09-promesas.js';
import heroes from "../../data/heroes";

describe('Pruebas en el archivo 09-promesas.test.js', () => {

    test('getHeroeByIdAsync debe devolver un Heroe async', ( done ) => {

        const id = 5;

        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toBe(heroes[4]);
            done();
        })

    })

    test('getHeroeByIdAsync debe obtener error si no existe', ( done ) => {
            
            const id = 15;
    
            getHeroeByIdAsync(id).catch(err => {
                // eslint-disable-next-line jest/no-conditional-expect
                expect( err ).toBe('No se encontro el heroe');
                done();
            })
    
        })

});