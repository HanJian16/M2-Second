export default function validation(userData){
  const regexUsername = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const regexPassword = /^(?=.*[\d])[a-zA-Z\d]*$/;
  let errors = {};

  if(!userData.username) {
    errors.username = 'Tienes que llenar este campo';
  }
  if(!regexUsername.test(userData.username)) {
    errors.username = 'Este usuario no es válido';
  }
  if(userData.username.length > 35) {
    errors.username = 'Este usuario es muy largo';
  }
  if(!regexPassword.test(userData.password)){
    errors.password = 'La contraseña necesita mínimo un número';
  }
  if(userData.password.length < 6 || userData.password.length > 10) {
    errors.password = 'La contraseña debe tener entre 6 y 10 carácteres';
  }
  return errors;
}