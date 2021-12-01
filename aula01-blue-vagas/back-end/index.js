const express = require("express");

const app = express();

const port = 3000;

const blueVagas = [
    {
        id: 1, 
        empresa: "Blue", 
        salario: 3000, 
        oportunidade: "Front-End Jr",
        tipo: "estagio",

    },

    {
        id: 2, 
        empresa: "IBM", 
        salario: 3000, 
        oportunidade: "Front-End Jr",
        tipo: "estagio",

    },
    {
        id: 3, 
        empresa: "Google", 
        salario: 3000, 
        oportunidade: "Front-End Jr",
        tipo: "estagio",

    },
    {
        id: 4, 
        empresa: "Facebook", 
        salario: 3000, 
        oportunidade: "Front-End Jr",
        tipo: "estagio",

    },
];

app.use(express.json());

app.all("/*", (req, res, next) => {

    res.header("Acess-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Methods", "*");

    next();
});

app.get("/", (req, res) => { 
    res.send("Olá Bluemers!");
});

app.get("/vagas", (req, res) => {
    res.send(blueVagas);
})

app.get("/vagas/:id", (req, res) => {
    const idParam = req.params.id;

    const vagaEncontrada = blueVagas.find((vaga) => vaga.id == idParam);

    res.send(vagaEncontrada);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});
