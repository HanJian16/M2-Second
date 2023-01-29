import { connect } from 'react-redux';
import React from 'react';
import './products.css';
//El componente Card lo exportamos haciendo destructuring para poder testearlo
import Card from '../Card/Card'
import { getStoreName } from '../../redux/actions/actions.js';

export function Products({list, storeName, getStoreName}) {
   React.useEffect(() => {
      getStoreName()
   }, [])
   // console.log(storeName)
   return (
      <>
         <div className='productsBg'>
            <h1 className='productsTl'>{storeName}</h1>

            <div className='productsList'>a
               {/* ¡Renderiza aquí todas tus cards! */
                  list.map((ele, index) => (<Card
                  name={ele.name}
                  price={ele.price}
                  id={ele.id}
                  key={index}/>))
               }
            </div>
         </div>
      </>
   );
}

export function mapStateToProps(state) {
   return{
      list: state.list,
      storeName: state.storeName
   }
}

export function mapDispatchToProps(dispatch){
   return{
      getStoreName: () => dispatch(getStoreName())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
