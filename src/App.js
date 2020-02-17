import React, {useEffect, useState} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import logo from './pokeball.png';
import background from './whosthatpkmn.png';
import './App.css';
import { getRandom } from "./mixins/getRandom";
import InputSearchBar from "./components/InputSearchBar";
import PkmnSpiningImage from "./components/PkmnSpiningImage";
import SuccessGuessP from "./components/SuccessGuessP";

let apiPkmnURL = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [imgUrl, setImage] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [anotherOne, toggleAnother] = useState(false)
  const [inputValue, setInputValue] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [correctos, setCorrectos] = useState(0);
  const [incorrectos, setIncorrectos] = useState(0);
  const [nivel, setNivel] = useState(1);
  const [xp, setXp] = useState(0);
  const [cantPkmns, setCantPkmns] = useState(50);
  const [isShowing, setIsShowing] = useState(true);


  useEffect(()=>{
    function getPokemonGirando(numero) {
      setIsShowing(true);
      fetch( `${apiPkmnURL}/${numero}`, {
        method: 'GET'
      }).then(res => {
        res.json().then(value => {

          setTimeout(()=>{
            setInputValue("");
            setIsShowing(false);
            setPokemon(value)
            // console.log(value);
            // console.log(value.name);
            // console.log(value.sprites.front_default);
            setImage(value.sprites.front_default)
          },2000);
        });

      });
    }

    // 809
    getPokemonGirando(getRandom(1,cantPkmns))

    if(xp==nivel*2){
    console.log("SUBISTE DE NIVEL");
      setXp(0);
      setNivel(nivel+1);
      setCantPkmns(cantPkmns+50)
    }

  },[anotherOne])

  const toggle = () => {
    toggleAnother(!anotherOne)
  }

  const handleInputChange = (value) => {
    if (value == pokemon.name) {
      setInputValue(`Correcto! ${pokemon.name}`);
      setCorrectos(correctos+1);
      setXp(xp+1);
    }
    else{
      setInputValue(`Incorrecto ${pokemon.name}`);
      setIncorrectos(incorrectos+1)
    }
    toggleAnother(!anotherOne);
  }

  // const handleSpinImgChange = (value) => {
  //   setImage(value)
  // }

  return (
    <div className="App">
      <header className="App-header">
        <p>Adivina el PoKéMoN !</p>
        <PkmnSpiningImage filter={isShowing} img={imgUrl || logo} />
        <p>{inputValue}</p>
        <p>{correctos}<span>👍</span>  {incorrectos}<span>👎</span></p>
        <p>Nivel {nivel}</p>
        <InputSearchBar handleChange={handleInputChange} />
        <ProgressBar
          variant="success"
          className="xpBar"
          now={parseInt(((xp)/(nivel*2)*100),10)}
          label={`${parseInt(((xp)/(nivel*2)*100),10)}%`}
        />
      </header>
    </div>
  );
}

export default App;
