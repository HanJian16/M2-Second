import Card from './Card';
import cs from './Cards.module.css';

export default function Cards(props) {
   const { characters } = props;
   return (<div className={cs.div}>
      {characters.map((character, id) => (
         <Card
            key={id}
            idArray={id}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={props.onClose}/>
      ))}
   </div>);
}
