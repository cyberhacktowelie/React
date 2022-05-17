import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente GifGrid   GifGrid.test.js', () => {

    const category = 'One Punch';

    test('Debe de mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/cualquiercosa.jpg',
                title: 'Cualquier cosa'
            },
            {
                id: 'DEF',
                url: 'https://localhost/otracosa.jpg',
                title: 'Otra cosa'
            }   
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        // expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find('p').exists() ).toBe(false);

        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);


    })

});