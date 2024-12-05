const fs = require("fs")

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deletaFvoritoPorId(id) {
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))

    const livrosFiltrados = livros.filter( livro => livro.id !== id)
    fs.writeFileSync("favoritos.js", JSON.stringify(livrosFiltrados))
}

function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const livroInserido = livros.find( livro => livro.id === id )
    const novaListaDeFvoritos = [...favoritos, livroInserido] //Spreading

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeFvoritos))
}

module.exports = {
    getTodosFavoritos,
    deletaFvoritoPorId,
    insereFavorito
}