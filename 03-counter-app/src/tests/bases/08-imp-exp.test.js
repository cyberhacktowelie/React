import { getHeroeById, getHeroesByOwner } from "../../bases/08-imp-exp.js";
import heroes from "../../data/heroes";

describe('Pruebas en el archivo 08-imp-exp.test.js', () => {


    test('getHeroeById debe devolver un heroe por id', () => {

        const id = 5;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);

    })

    test('getHeroeById debe devolver undefined si no existe', () => {

        const id = 15;
        const heroe = getHeroeById(id);

        // const heroeData = undefined;
        // expect(heroe).toEqual(heroeData);
        expect(heroe).toBe(undefined);

    })

    test('getHeroesByOwner debe devolver un array con los heroes de DC check array filtrado', () => {

        const owner = 'DC';
        const heroesArray = getHeroesByOwner(owner);

        const heroeData = heroes.filter(h => h.owner === owner);
        expect(heroesArray).toEqual(heroeData);

    })

    test('getHeroesByOwner debe devolver un array con los heroes de Marvel check array length', () => {

        const owner = 'Marvel';
        const heroesArray = getHeroesByOwner(owner);

        expect(heroesArray.length).toBe(5);

    }) 

    test('getHeroesByOwner debe devolver array vacio si owner no existe', () => {

        const owner = 'Silent Bob';
        const heroesArray = getHeroesByOwner(owner);

        expect(heroesArray).toEqual([]);

    }) 

});