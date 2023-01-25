import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About.jsx';
import Detail from './components/Detail';
import Error from './components/Error';
import Form from './components/Form';

function App() {
  const [characters, setCharacters] = useState([]);
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let seg = true;
          characters.forEach(character => {
            if (character.name === data.name) {
              window.alert('che ese personaje ya está');
              seg = false;
            }
          })
          if (seg) setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  };
  const onClose = (id) => {
    setCharacters(
      characters.filter((c, index) => id !== index)
    )
  };
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '1password';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  };
  useEffect(() => {
    !access && navigate('/');
  }, [access]);
  const logout = () => {
    setAccess(false);
  }
  return (
    <div className='App'>
      {location.pathname !== '/' ? <Nav onSearch={onSearch} logout={logout}/> : null}
      <hr />
      <Routes>
        <Route path='home' element={<Cards
          characters={characters}
          onClose={onClose} />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='detail'>
          <Route path=':detailId' element={<Detail />}></Route>
        </Route>
        <Route path='*' element={<Error />}></Route>
        <Route path='/' element={<Form login={login} />}></Route>
      </Routes>
    </div>
  )
}

export default App
