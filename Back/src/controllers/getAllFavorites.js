const { Favorites } = require("../DB_connection");

const getAllFavorites = async () => {
  try {
    let allFavorites = await Favorites.findAll();
    if (!allFavorites) {
      throw new Error("No hay Favoritos");
    }
    return allFavorites;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getAllFavorites;
