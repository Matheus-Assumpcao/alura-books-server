const { getTodosFavoritos, deletaFavoritoPorId, insereFavorito } = require("../servicos/favorito")

function getFavoritos(req, res) {
    try {
        const favoritos = getTodosFavoritos()
        res.send(favoritos)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function postFavorito(req, res) {
    try {
        const idLivro = req.params.id
        if(idLivro && Number(idLivro)) {
            insereFavorito(idLivro)
            res.send("Livro inserido com sucesso")
            res.status(201)
        } else {
            res.status(422)
            res.send("Id inválido")
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorito(req, res) {
    try {
        const idLivro = req.params.id
        if(idLivro && Number(idLivro)) {
            deletaFavoritoPorId(idLivro)
            res.send("livro deletado com sucesso")
        } else {
            res.status(422)
            res.send("ID inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}