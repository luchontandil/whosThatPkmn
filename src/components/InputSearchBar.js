import React, {useState}  from 'react';

const InputSearchBar = ({handleChange}) => {
  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
       handleChange(event.target.value);
       event.target.value = "";
      }
    }

  return (
    <input
    placeholder="Nombre del Pokémon"
    type="text"
    onKeyPress={handleKeyPress}
    />
  )
}

export default InputSearchBar
