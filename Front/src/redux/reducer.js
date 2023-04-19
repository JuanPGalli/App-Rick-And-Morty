import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case DELETE_FAVORITE:
      let filteredList = state.myFavorites.filter(
        (char) => char.id !== action.payload
      );
      return {
        ...state,
        myFavorites: filteredList,
      };
    case FILTER:
      const allCharactersFiltered = state.allCharacters.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites:
          action.payload === "allCharacters"
            ? [...state.allCharacters]
            : allCharactersFiltered,
      };
    case ORDER:
      const allCharactersCopy = [...state.allCharacters];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allCharactersCopy.sort((a, b) => a.id - b.id)
            : allCharactersCopy.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
};

export default reducer;
