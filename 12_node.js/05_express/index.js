// criar 3 rotas diferentes

let express = require("express");
let app = express();

// chamei o api né?

app.get("/home", function(req,res) {
    res.send("Bem vindo!");
});
app.get("/sobre", function(req,res) {
    res.send("Página sobre");
});
app.get("/contato", function(req,res) {
    res.send("Entre em contato");
});

// tentar retornar JSON (nunca vi)

app.get("/usuario", function(req,res) {
    res.json({nome: "Wesley", idade: 29, cidade: "Bambuí - MG"});
});

// ler um arquivo 

app.get("arquivo.txt", function(req,res) {
    readFile("arquivo.txt", "utf8", (error,texto) => {
        if(error) {
            res.send("erro ao ler arquivo");
        } else {
            res.send(texto);
        }
    })
})

// ouvindo:

app.listen(3000);