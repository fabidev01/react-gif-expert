import React, { useState } from 'react'

export const AddCategory = ({onAddCategory}) => {
  const [inputValue, setInputValue] = useState('');
  const onImputChange = ({target}) => { 
    setInputValue(target.value);
  };
  const onImputSubmit = (e) => {
    e.preventDefault();
    if((inputValue.trim()).length < 1) return;
    onAddCategory(inputValue.trim());
    setInputValue('');
  };
  return (
    <form onSubmit={ onImputSubmit }>
      <input 
      type="text"
      placeholder='Buscar Gifs'
      onChange = {e => onImputChange(e) }
      value = { inputValue }
      />
    </form>
  )
}
