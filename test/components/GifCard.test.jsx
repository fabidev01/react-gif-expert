import { render, screen } from "@testing-library/react"
import { GifCard } from "../../src/components/GifCard"

describe('pruebas en el gifCard', () => { 
  const title= 'titulo'
  const url= 'https://github.com/'
  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<GifCard title={ title } url={ url }/>);
    expect(container).toMatchSnapshot();
  })
  test('Debe mostrar la imagen con el URL y el alt indicado', () => {
    render(<GifCard title={ title } url={ url } />);
    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test('Debe mostrar el titulo en el componente', () => {
    render(<GifCard title={ title } url={ url } />);
    expect(screen.getByText(title)).toBeTruthy();
  });
})