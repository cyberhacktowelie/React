import { getImage } from '../../bases/11-async-await.js';


describe('Pruebas en el archivo 11-async-await.test.js', () => {

    test('getImage debe devolver una url async', async() => {

        const url = await getImage();


        expect(  url.includes('http') ).toBe(true);

    })

});