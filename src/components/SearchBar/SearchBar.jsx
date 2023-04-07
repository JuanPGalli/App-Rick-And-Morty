import { useState } from "react";

function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState("");

  const handleChange = (event) => {
    setCharacter(event.target.value);
  };

  return (
    <div>
      <input type="search" value={character} onChange={handleChange} />
      <button onClick={() => onSearch(character)}>Agregar</button>
    </div>
    // Si yo le tengo que pasar parámentros a una función que tengo en Onclick u onChange, le tengo que pasar un callback
  );
}

export default SearchBar;
