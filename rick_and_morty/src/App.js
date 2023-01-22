import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let seg = true;
          characters.forEach(character => {
            if(character.name === data.name){
              window.alert('che ese personaje ya está');
              seg = false;
            }
          })
          if(seg) setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }
  //[]
  const onClose = (id) => {
    setCharacters(
      characters.filter((c, index) => id !== index)
    )
    console.log(characters)
  }
  return (
    <div className='App'>
      <div>
        <Nav onSearch={onSearch} />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
    </div>
  )
}

export default App
