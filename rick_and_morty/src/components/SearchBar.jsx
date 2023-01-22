import cs from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar(props) {
   const [character, setCharacter] = useState('')
   const onChange = function(e){
      setCharacter(()=>(`${e.target.value}`))
   }
   const onClick = function(){
      props.onSearch(character)
   }
   return (
      <div className={cs.div}>
         <input className={cs.input} type='search' onChange={onChange}/>
         <button className={cs.button} onClick={onClick}>Agregar</button>
      </div>
   );
}
