import React, { useState } from 'react'
import PropTypes from "prop-types";

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
    <form aria-label='form' onSubmit={ onImputSubmit }>
      <input 
      type="text"
      placeholder='Buscar Gifs'
      onChange = {e => onImputChange(e) }
      value = { inputValue }
      />
    </form>
  )
}

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired
}