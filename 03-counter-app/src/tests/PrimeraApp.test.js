/* eslint-disable testing-library/prefer-screen-queries */
// import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";


describe    ('Pruebas en el archivo PrimeraApp.test.js', () => {
    // test('PrimeraApp debe mostrar un saludo', () => {
    //     const saludo = 'Hola soy Goku';
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);
    //     // console.log(getByText(saludo));

    //     // expect ( getByText(saludo + '!') ).toBeInTheDocument();
    //     expect ( getByText(saludo) ).toBeInTheDocument();

    // });



    test('PrimeraApp debe mostrar un saludo', () => {
        const saludo = 'Hola soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        expect( wrapper ).toMatchSnapshot();

    });

    test('PrimeraApp debe mostrar un subtitulo enviado por props', () => {
        const saludo = 'Hola soy Goku';
        const subtitulo = 'Soy el subtitulo';
        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subtitulo} />);
        expect( wrapper ).toMatchSnapshot();

        const textoParrafo = wrapper.find('p').text();
        // console.log(textoParrafo);

        expect( textoParrafo ).toBe( subtitulo );

    });

});