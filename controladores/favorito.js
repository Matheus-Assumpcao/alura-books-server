const { getTodosFavoritos, insereFavorito, deletaFvoritoPorId } = require("../servicos/favorito")

function getFavoritos(req, res) {
    try{
        const livros = getTodosFavoritos()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req,res) {
    try{
        const id = req.parms.id 
        insereFavorito(id)
        res.status(201)
        res.send("Livro inserido com sucesso")
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
    res.send('Você fez um requisição do tipo POST')
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)){
            deletaFvoritoPorId(id)
            res.send("Favorito deletado com sucesso")
        } else {
            res.status(422)
            res.send("Id Invalido")
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