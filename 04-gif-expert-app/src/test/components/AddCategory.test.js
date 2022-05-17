import { AddCategory } from '../../components/AddCategory';
import { shallow } from 'enzyme';

describe('Pruebas en el componente AddCategory   AddCategory.test.js', () => {

    const setCategories = jest.fn();
    // const setCategories = () => {};
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        setCategories.mockClear();//jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });


    test('Debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe cambiar el valor del input', () => {
            
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value } });
        expect( wrapper.find('input').prop('value') ).toBe(value);

    })

    test('No debe de postear la categoria si el input esta vacio', () => {
            
        const form = wrapper.find('form');
        const value = '';
        form.simulate('submit', { preventDefault() {} });
        expect( setCategories ).not.toHaveBeenCalled();

    })


    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
                
            const value = 'Hola Mundo';
            const input = wrapper.find('input');
            input.simulate('change', { target: { value } });

            const form = wrapper.find('form');
            form.simulate('submit', { preventDefault(){ /* TODO document why this method 'preventDefault' is empty */ } });

            expect( setCategories ).toHaveBeenCalled();
            expect( setCategories ).toHaveBeenCalledWith(expect.any(Function));
            expect( setCategories ).toHaveBeenCalledTimes(1);
            expect( input.prop('value') ).toBe('');
    
        })

});