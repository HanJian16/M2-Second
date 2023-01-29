import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } from "./types.js";
import axios from 'axios';

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
})

export const getStoreName = () => {
  return async function (dispatch) {
    try {
      let response = await axios.get("http://localhost:3001/store");
      console.log(response.data.name, 'este es el response')
      return dispatch({
        type: GET_STORE_NAME,
        payload: response.data.name,
      })
    } catch (error) {
      console.log(error);
    }
  }
}