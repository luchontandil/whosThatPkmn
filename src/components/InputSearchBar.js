import React, {useState}  from 'react';

const InputSearchBar = ({handleChange},{isLocked}) => {
  const handleKeyPress = (event) => {
    if(event.key === 'Enter' && !isLocked){
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
