import cs from './Card.module.css';
import styled from 'styled-components';

const DivRow = styled.div`
   display: flex;
   flex-direction: row;
`;
export default function Card(props) {
   return (
      <div className={cs.div}>
         <button className={cs.button} onClick={props.onClose}>X</button>
         <h2 className={cs.h2name}>{props.name}</h2>
         <DivRow>
            <h2 className={cs.h2}>{props.species}</h2>
            <h2 className={cs.h2}>{props.gender}</h2>
         </DivRow>
         <img className={cs.img} src={props.image} alt={props.name} />
      </div>
   );
}
