import React, {useState}  from 'react';

const SuccessGuessP = ({isCorrect}) => {
 // == pokemon.name ? 'Correcto' : 'Incorrecto')
  return (
    <p>{isCorrect ? 'Correcto!' : 'Incorrecto'}</p>
  )
}

export default SuccessGuessP
