    
describe('Pruebas en el archivo demo.test.js', () => {
    
    test('deben ser iguales los strings', () => {

        // 1. Inicializar 
        const message = 'Hola Mundo!';
        // 2. Estimulo
        const message2 = `Hola Mundo!`;
        // 3. Observar el comportamiento
        expect(message).toBe(message2);// ===

    })
    
});