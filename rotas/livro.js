const { Router } = require("express")
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require("../controladores/livro")
const { getFavoritos, postFavorito, deleteFavorito } = require("../controladores/favorito")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)

router.get('/', getFavoritos)

router.post('/', postFavorito)

router.delete('/:id', deleteFavorito)

module.exports = router