import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Pruebas en el componente GifGridItem   GifGridItem.test.js', () => {

    const title = 'Titulo';
    const url = 'https://media.giphy.com/media/3o7btLwvZuXyj3N3zS/giphy.gif';
    let wrapper = shallow(<GifGridItem 
        title={title}
        url={url} />);

    beforeEach(() => {
        wrapper = shallow(<GifGridItem 
            title={title}
            url={url} />);
    });

    test('El itemm debe renderizarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    })

    test('Debe de tener un parrafo con el title', () => {
            
            const p = wrapper.find('p');
            expect( p.text() ).toBe(title);
    
    })

    test('Debe de tener una imagen con la url y alt', () => {
                
                const img = wrapper.find('img');
                // expect( img.prop('src') ).toBe(url);
                const { alt, src } = img.props();
                expect( alt ).toBe(title);
                expect( src ).toBe(url);
                
    })

    test('Debe de tener una clase animate__animated animate__fadeIn', () => {
                
                const div = wrapper.find('div');
                const { className } = div.props();
                expect( className ).toContain('animate__animated');
                expect( className.includes('animate__fadeIn') ).toBe(true);
                expect( div.hasClass('animate__animated') ).toBe(true);
                expect( div.hasClass('animate__fadeIn') ).toBe(true);
                
    })


});