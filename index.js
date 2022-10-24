const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27017/agendamento")

app.get("/", (req, res) => {
    res.send("oi");
})

app.listen(8080, () => {
    console.log("Aplicacao rodando na porta 8080");
})