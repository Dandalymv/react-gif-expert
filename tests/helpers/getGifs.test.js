import { getGifs } from "../../src/helpers/getGifs";


describe('Pruebas con getGifs Fetch', () => {


    test('debe retornar un arreglo de gifs', async () => {
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });

    test('Debe traer 10 elementos', async () => {
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);
    });

    test('Debe traer 0 elementos', async () => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    });

});