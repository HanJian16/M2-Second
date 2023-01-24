import cs from './Card.module.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DivRow = styled.div`
   display: flex;
   flex-direction: row;
`;
export default function Card(props) {
   const onClick = () => {
      props.onClose(props.idArray)
   }
   return (
      <div className={cs.div}>
         <button className={cs.button} onClick={onClick}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2 className={cs.h2name}>{props.name}</h2>
         </Link>
         <DivRow>
            <h2 className={cs.h2}>{props.species}</h2>
            <h2 className={cs.h2}>{props.gender}</h2>
         </DivRow>
         <img className={cs.img} src={props.image} alt={props.name} />
      </div>
   );
}
