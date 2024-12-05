const express = require("express");
const cors = require("cors");
const getLivros = require("./rotas/livro");
const { getFavoritos } = require("./controladores/favorito");

const app = express();
app.use(cors({origin: "*"})); 
app.use(express.json());
const port = 8000;

app.use('/livros', getLivros);
app.use('/favoritos', getFavoritos);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});
