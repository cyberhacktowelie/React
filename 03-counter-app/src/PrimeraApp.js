//FC
// import React from 'react'; //React 17 en adelante no es necesario
// import { Fragment } from "react";

import PropTypes from 'prop-types';

// const PrimeraApp = ( props ) => {
    // const PrimeraApp = ({ saludo = "Hola mundo" }) => {
    const PrimeraApp = ({ saludo, subtitulo='Soy un subtitulo'}) => {

        // const saludo1 = 'Hola mundo';

    //     const objeto = {
    //     nombre: 'Juan',
    //     apellido: 'Perez',
    //     edad: 30
    // };

    // console.log(props);

    return (
        // <Fragment>
        <>
            {/* <h1> {saludo1} </h1> */}
            {/* <h2> {props.saludo} </h2> */}
            <h2>{saludo}</h2>
            {/* <p>Mi PrimeraApp.</p> */}

            {/* <p> {JSON.stringify(objeto)} </p> */}
            {/* <pre> {JSON.stringify(objeto, null, 2)} </pre> */}


            <p>{subtitulo}</p>
        </>
        // </Fragment>
    
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo por defecto'
}

export default PrimeraApp;