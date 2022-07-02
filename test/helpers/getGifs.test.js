import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en la funcion getGifs()', () => {
  test('Deberia retornar un arreglo de objetos: url title y id', async () => {
    const categoria= 'saitama';
    const gifs= await getGifs(categoria);
    expect( gifs.length ).toBe( 10 );
    expect( gifs[0] ).toEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String)
    });
  });
  
});