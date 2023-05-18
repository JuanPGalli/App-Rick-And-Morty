import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types";
import axios from "axios";

export const addFavorite = (character) => {
  //return {type: ADD_FAVORITE,payload: character,};
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:3001/rickandmorty/favorites",
      character
    );
    const data = response.data;
    return dispatch({
      type: ADD_FAVORITE,
      payload: data,
    });
  };
};

export function deleteFavorite(id) {
  //return {type: DELETE_FAVORITE,payload: id,};
  return async (dispatch) => {
    const response = await axios.delete(
      `http://localhost:3001/rickandmorty/favorites/${id}`
    );
    const data = response.data;
    return dispatch({
      type: DELETE_FAVORITE,
      payload: data,
    });
  };
}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}
