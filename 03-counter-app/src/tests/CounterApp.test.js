import CounterApp from "../CounterApp";
import { shallow } from "enzyme";


describe    ('Pruebas en el archivo CounterApp.test.js', () => {

    // let wrapper;//undefined
    let wrapper = shallow(<CounterApp />);//para no perder el intelisense lo inicializamos

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('<CounterApp /> debe mostrarse correctamente (match snapshot) y sus valores por defecto', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('CounterApp debe mostrar el valor por defecto 100', () => {
        const valorInicial = '100';
        const wrapper = shallow(
            <CounterApp 
            value={ 100 }/>);
        expect( wrapper ).toMatchSnapshot();

        const textoParrafo = wrapper.find('h2').text().trim();
        expect( textoParrafo ).toEqual( valorInicial );
    });

    test('CounterApp debe incrementar el valor en 1', () => {
        const incrementButton = wrapper.find('button').at(0);
        incrementButton.simulate('click');

        const textoParrafo = wrapper.find('h2').text().trim();
        expect( textoParrafo ).toEqual( '1' );
    });

    test('CounterApp debe decrementar el valor en 1', () => {
        // wrapper.setProps({ value: 0 });
        const decrementButton = wrapper.find('button').at(2);
        decrementButton.simulate('click');

        const textoParrafo = wrapper.find('h2').text().trim();
        expect( textoParrafo ).toEqual( '-1' );
    });

    test('CounterApp debe resetear correctamente al pulsar boton reset', () => {

        const wrapper = shallow(
            <CounterApp 
            value={ 105 }/>);
        const incrementButton = wrapper.find('button').at(0);
        incrementButton.simulate('click');
        incrementButton.simulate('click');
        const resetButton = wrapper.find('button').at(1);
        resetButton.simulate('click');
        const textoParrafo = wrapper.find('h2').text().trim();
        expect( textoParrafo ).toEqual( '105' );
    });

});