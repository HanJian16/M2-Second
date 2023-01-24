import css from './About.module.css';

export default function About(props) {
  return (
    <div>
      <h1 className={css.text}>Hola, soy Han, esta es la primera app que estoy haciendo.</h1>
      <br />
      <p className={css.text}>
        Agregaré más cosas luego.
      </p>
    </div>
  )
}