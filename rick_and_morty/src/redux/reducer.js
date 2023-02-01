import { ADD, DELETE } from './actions.js'

const initialState = {
  myFavorites : [],
}

export default function reducer (state = initialState, action) {
  switch(action.type){
    case ADD:
    return{
      ...state,
      myFavorites : [...state.myFavorites, action.payload]
    }
    case DELETE:
      return{
        myFavorites: state.myFavorites.filter((fav) => fav.id!==action.payload)
      }
    default:
      return {...state}
  }
}