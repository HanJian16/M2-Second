import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from './Detail.module.css';

export default function Detail() {
  const {detailId} = useParams();
  // console.log(detailId)
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]); 
  if(character.origin){
    var origen = character.origin.name;
    console.log(origen)
  }
  return(
    <div className={css.divContainer}>
      <div>
        <h1 className={css.text}>{`Nombre: ${character.name}`}</h1>
        <h2 className={css.text}>{`Status: ${character.status}`}<br/>{`Especie: ${character.species}`}<br/>{`Género: ${character.gender}`}<br/>{`Origen: ${origen}`}</h2>
      </div>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
    </div>
  );
}