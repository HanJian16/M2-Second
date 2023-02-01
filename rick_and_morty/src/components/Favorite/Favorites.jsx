import { connect } from "react-redux"
import css from './favorites.module.css';

export function Favorites ({myFavorites}) {
  console.log(myFavorites)
  return(
    <div className={css.divContainer}>
      {myFavorites.map((fav, index) => (
        <div className={css.div} key={index}>
          <h1>{fav.name}</h1>
          <img src={fav.image} alt={fav.name} />
        </div>
      ))}
    </div>
  )
}

export function mapStateToProps(state) {
  return{
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, null)(Favorites)