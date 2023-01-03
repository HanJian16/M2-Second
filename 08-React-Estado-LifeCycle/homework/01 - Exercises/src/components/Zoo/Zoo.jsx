import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo() {
   /* Escribe acá tu código */
   let [zoo, setZoo] = React.useState({
      zooName: '',
      animals: [],
      species: [],
      allAnimals: []
   });

   const handleInputChange = (e) => {
      setZoo({
         ...zoo,
         zooName: e.target.value
      })
   };

   React.useEffect(()=>{
      fetch('http://localhost:3001/zoo')
         .then((res) => res.json())
         .then((data) =>
            setZoo((zoo) => ({
               ...zoo,
               animals: data.animals,
               species: data.species,
               allAnimals: data.animals,
            }))
         )
         .catch((error) => console.log(error));
   },[]);

   const handleSpecies = (e) => {
      console.log(e);
      let seguro = zoo.allAnimals;
      setZoo(zoo => ({
         ...zoo,
         animals: zoo.allAnimals.filter(animal => animal.specie === e.target.innerHTML),
         allAnimals: seguro
      }))
   };

   const handleAllSpecies = () => {
      setZoo(zoo => ({
         ...zoo,
         animals: zoo.allAnimals
      }))
   };
   return (
      <div>
         <label>Zoo Name:</label>
         <input type="text" value={zoo.zooName} onChange={handleInputChange}/>
         <h1>{zoo.zooName}</h1>
         <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies}/>
         <Animals animals={zoo.animals}/>
      </div>
   );
}
