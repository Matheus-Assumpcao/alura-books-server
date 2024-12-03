const express = require("express");
const cors = require("cors"); // Importa o CORS
const getLivros = require("./rotas/livro");

const app = express();
app.use(cors()); // Habilita CORS para todas as rotas
app.use(express.json());
const port = 8000;

app.use('/livros', getLivros);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});
