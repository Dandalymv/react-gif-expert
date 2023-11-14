import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {

    test('debería renderizar el título correctamente', () => {
        render(<GifExpertApp />);
        expect(screen.getByText('GifExpertApp')).toBeInTheDocument();
    });

    // test('debería agregar una nueva categoría', () => {
    //     render(<GifExpertApp />);
        
    //     // Simular la entrada y el evento de envío
    //     const input = screen.getByRole('textbox');
    //     const form = screen.getByRole('form');

    //     fireEvent.change(input, { target: { value: 'Nueva Categoría' } });
    //     fireEvent.submit(form);

    //     expect(screen.getByText('Nueva Categoría')).toBeInTheDocument();
    // });

    test('no debería agregar una categoría si ya existe', () => {
        render(<GifExpertApp />);
        
        // Agregar una categoría
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.change(input, { target: { value: 'Nueva Categoría' } });
        fireEvent.submit(form);

        // Intentar agregar la misma categoría otra vez
        fireEvent.change(input, { target: { value: 'Nueva Categoría' } });
        fireEvent.submit(form);

        // El componente GifGrid solo debe renderizarse una vez por categoría
        expect(screen.getAllByText('Nueva Categoría').length).toBe(1);
    });

    // Otros tests posibles...

});
