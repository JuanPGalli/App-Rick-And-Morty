import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
//import style from "./Favorites.module.css";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="allCharacters">All Characters</option>
      </select>
      {/* <select value="D">Descendente</select> No iba?? */}
      {myFavorites.map((character, index) => {
        return (
          <div key={index}>
            <Link to={`/detail/${character.id}`}>
              <h2>{character.name}</h2>
            </Link>
            <h2>Specie: {character.species}</h2>
            <h2>Gender: {character.gender}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
