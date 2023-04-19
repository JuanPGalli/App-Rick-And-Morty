import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// const URL_BASE = "https://be-a-rym.up.railway.app/api/character/";
// const API_KEY = "4b7c423344ca.27db335720a8a43c1586";
//const url_anterior = `https://rickandmortyapi.com/api/character/${detailId}`;

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div>
      <button>
        <Link to="/home">Home</Link>
      </button>
      <h1>{character?.name}</h1>
      <p>{character?.status}</p>
      <p>{character?.species}</p>
      <p>{character?.gender}</p>
      <p>{character?.origin?.name}</p>
      <img src={character?.image} alt={character?.name} />
    </div>
    /* CONDITIONAL CHAINING(?): Primero pregunta si yo tengo algo en mi estado. Cuando voy a cargar información en mi estado, a veces tarda un poco. Pero en ese transcurso se puede romper la página. Al querer mostrar algo y si estaba vacío, se va a romper la página. De esta forma evito romper la página, se me va a cargar la información cuando se cargue el estado. */
  );
};

export default Detail;
