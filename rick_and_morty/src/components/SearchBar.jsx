import cs from './SearchBar.module.css';

export default function SearchBar(props) {
   return (
      <div className={cs.div}>
         <input className={cs.input} type='search' />
         <button className={cs.button} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
