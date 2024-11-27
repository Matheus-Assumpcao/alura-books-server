const express = require("express")
const getLivros = require("./rotas/livro")

const app = express()
const port = 8000

app.use('/livros', getLivros)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})