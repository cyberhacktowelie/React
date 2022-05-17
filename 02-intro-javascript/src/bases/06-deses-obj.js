//Desesetructuracion
//Asignacion Desestructurante

const persona = {
    nombre: 'Juan',
    edad: 28,  
    clave: 'IronMan'
};


const {nombre, edad, clave,} = persona;


const { nombre:nombre2 } = persona;

console.log(nombre2);

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);




const retornaPersona = ( usuario ) => {

    const {nombre, edad, clave,} = usuario;

    console.log(nombre, edad, clave);

}

retornaPersona(persona);


const retornaPersona2 = ( { nombre, edad, clave } ) => {

    console.log(nombre, edad, clave);

}

retornaPersona2(persona);


const newUseContext = ( { nombre, edad, rango = 'Capitan' } ) => {

    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.222,
            lng: 12.222
        }
    }
}

const avenger = newUseContext(persona);

const {nombreClave, anios, latlng} = avenger;
const {lat, lng} = latlng;

// const {nombreClave, anios, latlng:{lat, lng}} = avenger;

console.log(nombreClave, anios, lat, lng);