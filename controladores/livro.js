const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivroPorId } = require("../servicos/livro")

function getLivros(req, res) {
    try{
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try{
        const id = req.params.id

        if(id && Number(id)){
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("Id Invalido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req,res) {
    try{
        const livroNovo = req.body
        if(req.body.nome?.trim() && req.body.id) {
            insereLivro(livroNovo)
            res.status(201)
            res.send("Livro inserido com sucesso")
        } else {
            res.status(422)
            res.send("Erro -> id ou nome faltando")
        }

    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
    res.send('Você fez um requisição do tipo POST')
}

function patchLivro(req, res) {
    try{
        const id = req.params.id
        
        if(id && Number(id)){
            const body = req.body

            modificaLivro(body, id)
            res.send("Item Modificado com Sucesso")
        } else {
            res.status(422)
            res.send("Id Invalido")
        }

    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)){
            deletaLivroPorId(id)
            res.send("livro deletado com sucesso")
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
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}