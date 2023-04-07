import "./styles/App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Navbar/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Form from "./components/Form/Form.jsx";

function App() {
  const location = useLocation(); //devuelve objeto con un pathname p/ renderizado condicional.
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "jp@soyhenry.com";
  const password = "123asd";
  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/"); //Access es false, mientras eso se cumpla navega a "/"
  }, [access]); // monitorea siempre el cambio de estado en access

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname === "/" ? (
        <Form login={login} />
      ) : (
        <Nav onSearch={onSearch} />
      )}
      <Routes>
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        ></Route>
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
//const URL_BASE = "https://be-a-rym.up.railway.app/api/character/";
//const API_KEY = "4b7c423344ca.27db335720a8a43c1586";
//https://be-a-rym.up.railway.app/api/character/23?key=4b7c423344ca.27db335720a8a43c1586

//const url_anterior = `https://rickandmortyapi.com/api/character/${character}`;

//console.log(`${URL_BASE}${character}?key=${API_KEY}`);
