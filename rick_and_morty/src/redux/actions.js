export const ADD = 'ADD';
export const DELETE = 'DELETE';

export const addFavorite = (personaje) => ({
  type: ADD,
  payload: personaje
});

export const deleteFavorite = (id) => ({
  type: DELETE,
  payload: id
})