import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs  useFetchGifs.test.js', () => {

    test('Debe de retornar estado inicial', async() => {
            
        // const { data:images, loading } = useFetchGifs('One Punch');
        // const gifs = await useFetchGifs('One Punch');
        // expect( images.length ).toBe(10);
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        // console.log(data, loading);
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })

    test('Debe de retornar un array de imagenes y loading a false', async() => {
            
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);

    })

})