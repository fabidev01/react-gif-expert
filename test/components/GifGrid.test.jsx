import { screen, render } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('Pruebas en <GifGrid/>', () => {
  test('Debe de mostrar el loading inicialmente', () => {
    const category = 'one punch';
    render(<GifGrid category={ category } />);
    expect(screen.getByText(category)).toBeTruthy();
    expect(screen.getByText('Cargando.....')).toBeTruthy();
    
  });
});