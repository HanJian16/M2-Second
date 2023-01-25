import css from './Form.module.css';
import { useState } from 'react';
import validation from './validation.js';

export default function Form(props) {
  const [userData, setUserData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });
  const handleInputChange = (e) => {
    setUserData(() => ({
      ...userData,
      [e.target.name]: e.target.value
    }));
    setErrors(validation({
      ...userData,
      [e.target.name]: e.target.value
    }))
  };
  const handleSubmit = () => {
    props.login(userData)
  }
  return (
    <div className={css.divContainer}>
      <form onSubmit={handleSubmit}>
        <div className={css.divLabel}>
          <label className={css.label}>Username:</label>
          <input className={errors.username && css.warning} value={userData.username} name='username' placeholder='Username' type='text' onChange={handleInputChange} />
          {errors.username ? <p className={css.danger}>{errors.username}</p> : null}
        </div>
        <div className={css.divLabel}>
          <label className={css.label}>Password:</label>
          <input className={errors.password && css.warning} value={userData.password} name='password' placeholder='Password' type="password" onChange={handleInputChange} />
          {errors.password ? <p className={css.danger}>{errors.password}</p> : null}
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}