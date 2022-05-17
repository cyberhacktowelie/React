import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en el helper getGifs  getGifs.test.js', () => {

    test('Debe de retornar un array de tamaño 10', async() => {
            
            const gifs = await getGifs('One Punch');
            expect( gifs.length ).toBe(10);
    
        })

        test('Debe de retornar un array de vacio si no se le pasa argumento a getGifs()', async() => {
            
            const gifs = await getGifs('');
            expect( gifs.length ).toBe(0);
    
        })

})