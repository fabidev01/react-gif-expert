import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory/>', () => {
  const inputValue = 'saitama'
  
  test('Debe de cambiar el valor de la caja  de texto', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onAddCategory={ onNewCategory }/>);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: inputValue }});
    expect(input.value).toBe( inputValue );
  });

  test('Debe llamar onNewCategory si el input tiene un valor', ()=> {
    const onNewCategory = jest.fn();
    render(<AddCategory onAddCategory={ onNewCategory }/>);

    const input = screen.getByRole('textbox');
    const form  = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue }});
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toBeCalledWith( inputValue )

  });

  test('No deberia llamar el onNewCategory si el imput esta vacio', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onAddCategory={ onNewCategory }/>)

    const form  = screen.getByRole('form');

    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});