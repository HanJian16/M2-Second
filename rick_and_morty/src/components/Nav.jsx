import SearchBar from "./SearchBar";
import css from './Nav.module.css';
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  const onClick = () => {
    const random = Math.floor(Math.random()*(827-1)+1)
    props.onSearch(random)
  }
  return (
    <div className={css.div}>
      <button onClick={props.logout} className={css.button}>Logout</button>
      <NavLink className={css.navLink} to='/favorites'>Favorites</NavLink>
      <NavLink className={css.navLink} to='/home'>Home</NavLink>
      <NavLink className={css.navLink} to='/about'>About</NavLink>
      <button className={css.button} onClick={onClick}>Random</button>
      <SearchBar
        onSearch={props.onSearch}
      />
    </div>
  )
}