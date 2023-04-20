const http = require("http");
const characters = require("../utils/data");

const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); //Con esto autorizamos al front a que nos haga peticiones a nosotros.
    //console.log(req);
    if (req.url.includes("/rickandmorty/character")) {
      let id = req.url.split("/").at(-1); //Cuando agarramos datos de la URL son todos strings. Si quiero compara con numeros necesito parsear ese string.
      // const characterFilter = characters.filter((char) => char.id === Number(id) //puedo usar parseInt(id)
      const characterFilter = characters.find((char) => char.id === Number(id)); //devuelve un objeto, mientras que filter devuelve un array.
      if (characterFilter) {
        res
          .writeHead(200, { "Content-Type": "application/json" })
          .end(JSON.stringify(characterFilter));
      }
    }
    return;
  })
  .listen(PORT, "localhost");
