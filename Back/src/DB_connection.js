require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const userModel = require("./models/User");
const characterModel = require("./models/Character");
const favoriteModel = require("./models/Favorite");

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
userModel(sequelize);
characterModel(sequelize);
favoriteModel(sequelize);
//console.log(sequelize.models);

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
//const { User, Character } = sequelize.models;
// sequelize.models = { User: User, Character: Character, Favorite: Favorite };

module.exports = {
  // User,
  // Character,
  ...sequelize.models, //sequelize.models = {User, Character}
  sequelize,
};
