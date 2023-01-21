import Card from './Card';
import cs from './Cards.module.css';

export default function Cards(props) {
   const { characters } = props;
   const onClose = ()=> window.alert('esto se cierra pa');
   return (<div className={cs.div}>
      {characters.map((character, id) => (
         <Card
            key={id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={onClose}/>
      ))}
   </div>);
}
