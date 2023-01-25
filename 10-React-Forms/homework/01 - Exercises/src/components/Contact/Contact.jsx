import React from 'react'
import './Contact.modules.css'
import { useState } from 'react';

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  let errors = {};
  if(!inputs.name) {
    errors.name = 'Se requiere un nombre';
  }
  if(!regexEmail.test(inputs.email)) {
    errors.email = 'Debe ser un correo electrónico';
  }
  if(!(inputs.phone > 0)) {
    errors.phone = 'Sólo números positivos';
  }
  if(!inputs.subject) {
    errors.subject = 'Se requiere un asunto';
  }
  if(!inputs.message) {
    errors.message = 'Se requiere un mensaje';
  }
  return errors;
}

export default function Contact () {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: 0,
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const handleChange = (e) => {
    setInputs(()=>({
     ...inputs,
     [e.target.name]: e.target.value,
    }));
    setErrors(validate({
      ...inputs,
      [e.target.name]: e.target.value,
    }))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let arr = Object.values(errors);
    if(arr.length === 0) {
      alert('Datos completos');
      setInputs({
        name: '',
        email: '',
        phone: 0,
        subject: '',
        message: ''
      });
      setErrors({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } else {
      alert('Debe llenar todos los campos')
    }
  }
  return (<div>
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input className={errors.name && 'warning'} value={inputs.name} name='name' placeholder='Escribe tu nombre...' type='text' onChange={handleChange}></input>
      {errors.name && (<p className='danger'>{errors.name}</p>)}
      <label>Correo Electrónico:</label>
      <input className={errors.email && 'warning'} value={inputs.email} name='email' placeholder='Escribe tu email...' type='text' onChange={handleChange}></input>
      {errors.email ? <p className='danger'>{errors.email}</p>:null}
      <label>Teléfono:</label>
      <input className={errors.phone && 'warning'} value={inputs.phone} name='phone' placeholder='Escribe un teléfono...' type='number' onChange={handleChange}></input>
      {errors.phone ? <p className='danger'>{errors.phone}</p>:null}
      <label>Asunto:</label>
      <input className={errors.subject && 'warning'} value={inputs.subject} name='subject' placeholder='Escribe el asunto...' type='text' onChange={handleChange}></input>
      {errors.subject ? <p className='danger'>{errors.subject}</p>:null}
      <label>Mensaje:</label>
      <textarea className={errors.message && 'warning'} value={inputs.message} name='message' placeholder='Escribe tu mensaje...' type='text' onChange={handleChange}></textarea>
      {errors.message && <p className='danger'>{errors.message}</p>}
      <button type='submit'>Enviar</button>
    </form>
  </div>);
}
