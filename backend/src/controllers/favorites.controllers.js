const { Game } = require("../models/games");
const { Users } = require("../models/users");
const apiClient = require("../utils/apiClient");
const mapGames = require("../utils/mapGames");

const addFavorite = async (req, res) => {
    const { userId, gameId } = req.params;
    
    try {
        const uuidRegex = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;
        let addGameFavorite = await Users.findByPk(userId);
            if (uuidRegex.test(gameId)) {
                let gameInfo = await Game.findByPk(gameId);
                addGameFavorite.favoritos = [...addGameFavorite.favoritos, gameInfo];
                await addGameFavorite.save();
            } else {
                let searchGameApi = await apiClient(`games/${gameId}`);
                let mapGameApi = await mapGames([searchGameApi]);           
                addGameFavorite.favoritos = [...addGameFavorite.favoritos, mapGameApi[0],];

                await addGameFavorite.save();
            }
        res.status(200).json({
            message: "game added to favorites list",
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const getFavorite = async (req,res) => {
    const {userId} = req.params

    try {
        const user = await Users.findByPk(userId)
        const favorites = user.favoritos 
        const favoritesMap = favorites.map(el => el)
             
        res.status(200).send(favoritesMap)
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

const deleteFavorite = async (req, res) => {
    const {idUser, idGame} = req.params;
    console.log("aca esta el idGame", idGame)
    console.log("aca esta el idUser", idUser)
}


module.exports = { addFavorite, getFavorite, deleteFavorite };
