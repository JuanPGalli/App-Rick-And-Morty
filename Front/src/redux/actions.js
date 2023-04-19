import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types";

export function addFavorite(character) {
  return {
    type: ADD_FAVORITE,
    payload: character,
  };
}

export function deleteFavorite(id) {
  return {
    type: DELETE_FAVORITE,
    payload: id,
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
