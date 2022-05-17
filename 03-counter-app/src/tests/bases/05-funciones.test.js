import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../bases/05-funciones.js';

describe('Pruebas en el archivo 05-funciones.test.js', () => {

    test('getUser() debe devolver objeto', () => {

        const usuario = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();   
       
        expect(user).toEqual(usuario);// ===

    })

    test('getUsuarioActivo() debe devolver objeto con username por arg', () => {

        const username = 'Juan';
        const usuario = {
            uid: 'ABC567',
            username: username
        };

        const usuarioActivo = getUsuarioActivo(username);   
        // 3. Observar el comportamiento
        expect(usuarioActivo).toEqual(usuario);// ===

    })

});