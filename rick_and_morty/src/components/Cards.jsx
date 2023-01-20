import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   const onClose = ()=> window.alert('esto se cierra pa');
   return (<div>
      {characters.map(character => (
         <Card
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={onClose}/>
      ))}
   </div>);
}
