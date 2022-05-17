import GifExpertApp from '../GifExpertApp';
import { shallow } from 'enzyme';

describe('Pruebas en el componente GifExpertApp   GifExpertApp.test.js', () => {

    let wrapper = shallow(<GifExpertApp/>);

    beforeEach(() => {
        wrapper = shallow(<GifExpertApp />);
    });


    test('Debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de mostrar una lista de categorias', () => {
        
        const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
        wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe(categories.length);
    })


});