const express = require("express");
const cors = require("cors");
const getLivros = require("./rotas/livro");

const app = express();
app.use(cors({origin: "*"})); 
app.use(express.json());
const port = 8000;

app.use('/livros', getLivros);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});
