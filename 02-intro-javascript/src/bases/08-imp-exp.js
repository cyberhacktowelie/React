// import { heroes } from './data/heroes';


// import heroes , { owners } from "./data/heroes";

import { heroes ,  owners } from "../data/heroes";

// console.log(owners);
// console.log(heroes);

const getHeroeByIdLong = (id) => {
    return heroes.find( (heroe) => {
        if (heroe.id === id){
            return true
        }else{
            return false
        }
})};

// console.log(getHeroeByIdLong(2));

export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}   

// console.log(getHeroeById(2));

const getHeroeByIdSort = (id) => heroes.find((heroe) => heroe.id === id);
// console.log(getHeroeByIdSort(2));

export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('Marvel'));
// console.log(getHeroesByOwner('DC'));
