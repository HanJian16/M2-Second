import SearchBar from "./SearchBar";
import css from './Nav.module.css';

export default function Nav(props) {
  const onClick = () => {
    const random = Math.floor(Math.random()*(827-1)+1)
    props.onSearch(random)
  }
  return (
    <div className={css.div}>
      <button className={css.button} onClick={onClick}>Random</button>
      <SearchBar
        onSearch={props.onSearch}
      />
    </div>
  )
}