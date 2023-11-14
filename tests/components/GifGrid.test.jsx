import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => { 

    const category = 'One Punch';

    test('debe de mostrar el loding inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        const { getByText } = render(<GifGrid category={category}/>);
        //screen.debug();
        expect(getByText('Cargando...'));
        expect(getByText(category));

    });


    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/cualquier/cosa.jpg',
                title: 'Cualquier cosa'
            },
            {
                id: '123',
                url: 'https://localhost/cualquier/cosa.jpg',
                title: 'Cualquier cosa'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

       

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
        
    });

 })