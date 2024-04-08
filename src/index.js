import express from "express";
import cors from "cors"
import Alumno from "./models/alumno.js"
import {sumar,restar,multiplicar,dividir} from "./modules/matematica.js"
import {OMDBSearchPage, OMDBSearchComplete, OMDBGetByImdbID} from "./modules/OMBDWrapper.js"
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=> {
    res.send("Ya estoy respondiendo")
})
app.get("/saludar/:nombre",(req,res)=> {
    res.send("Hola " + req.params.nombre)
})
app.get("/validarfecha/:ano/:mes/:dia", (req, res) => { 
    const mes = parseInt(req.params.mes);
    const fecha = Date.parse(req.params.ano + "-" + (mes) + "-" + req.params.dia);
    if (!isNaN(fecha)) {
        res.status(200).send("Fecha valida: " + new Date(fecha));
    } else {
        res.status(400).send("No es una fecha válida");
    }
});


app.get("/matematica/sumar", (req, res) => {
    const { n1, n2 } = req.query;
    const suma = sumar(parseInt(n1), parseInt(n2));
    res.status(200).send(suma.toString());
});
app.get("/matematica/restar", (req, res) => {
    const { n1, n2 } = req.query;
    const suma = restar(parseInt(n1), parseInt(n2));
    res.status(200).send(suma.toString());
});
app.get("/matematica/multiplicar", (req, res) => {
    const { n1, n2 } = req.query;
    const suma = multiplicar(parseInt(n1), parseInt(n2));
    res.status(200).send(suma.toString());
});
app.get("/matematica/dividir", (req, res) => {
    const { n1, n2 } = req.query;
    const suma = dividir(parseInt(n1), parseInt(n2));
    res.status(200).send(suma.toString());
});
app.get("/ombd/searchbypage",async (req,res)=> {
    const {texto,pagina} = req.query
    let datos = await OMDBSearchPage(texto,pagina)
    res.status(200).send("Datos:" + datos)
})
app.get("/ombd/searchcomplete",async (req,res)=> {
    const texto = req.query
    let datos = await OMDBSearchComplete(texto)
    res.status(200).send("Datos:" + datos)
})
app.get("/ombd/getbyomdbid",async (req,res)=> {
    const imdb = req.query
    let datos = await OMDBGetByImdbID(imdb)
    res.status(200).send("Datos:" + datos)
})
app.listen(port,()=> {
    console.log("Escuchando el puerto" + port)
})