import cs from './Card.module.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../redux/actions.js';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

const DivRow = styled.div`
   display: flex;
   flex-direction: row;
`;
export function Card({ myFavorites, addFavorite, deleteFavorite, ...props }) {
   const onClick = () => {
      props.onClose(props.idArray)
   }
   const [isFav, setIsFav] = useState(false);
   const handleFavorite = (e) => {
      if (isFav) {
         setIsFav(false);
         deleteFavorite(props.id);
      } else {
         setIsFav(true);
         addFavorite(props)
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   return (
      <div className={cs.div}>
         <div className={cs.divButtons}>
            {
               isFav ? (
                  <button className={cs.buttonFav} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={cs.buttonFav} onClick={handleFavorite}>🤍</button>
               )
            }
            <button className={cs.button} onClick={onClick}>X</button>
         </div>
         <img className={cs.img} src={props.image} alt={props.name} />
         <Link to={`/detail/${props.id}`}>
            <h2 className={cs.h2name}>{props.name}</h2>
         </Link>
         <DivRow>
            <h2 className={cs.h2}>{props.species}</h2>
            <h2 className={cs.h2}>{props.gender}</h2>
         </DivRow>
      </div>
   );
}

export function mapToDispatchToProps(dispatch) {
   return {
      addFavorite: (personaje) => dispatch(addFavorite(personaje)),
      deleteFavorite: (id) => dispatch(deleteFavorite(id))
   }
}

export function mapStateToProps (state) {
   return {
      myFavorites : state.myFavorites
   }
}

export default connect(mapStateToProps, mapToDispatchToProps)(Card)