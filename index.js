'use strict'

const port = process.env.PORT || 3000

const https = require('https');
const fs = require('fs');

const OPTIONS_HTTPS ={
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
};

const express = require('express');
const logger = require('morgan');
const mongojs = require('mongojs');


const app = express();

var db = mongojs("SD");
var id = mongojs.ObjectID;

const cors = require ('cors');



//middlewares

var allowCrossTokenHeader = (req, res, next) => {
    res.header("Access-Control-Allow-Headers","*");
    return next();
};

var allowCrossTokenOrigin = (req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    return next();
};

var auth = (req, res, next) => {
    if(req.headers.token =="password1234") {
        return next();
    } else{
        return next(new Error("No autotizado"));
    };
};

app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(allowCrossTokenHeader);
app.use(allowCrossTokenOrigin);

//añadimos el trigger previo para dar soporte a múltiples colecciones

app.param("coleccion", (req, res, next, coleccion) =>{
   console.log('param /api/:coleccion');
   console.log('colección: ', coleccion);
   
    req.collection = db.collection(coleccion);
    return next();
});

//rutas

app.get('/api', (req, res, next) =>{
    console.log('GET /api');
    console.log(req.params);
    console.log(req.collection);

    db.getCollectionNames((err, colecciones) =>{
        if (err) return next(err);
        res.json(colecciones);
    });
});

app.get('/api/:coleccion', (req, res, next) =>{

    req.collection.find((err, coleccion) =>{
        if (err) return next(err);
        res.json(coleccion);
    });
});

app.get('/api/:coleccion/:id', (req, res, next) =>{

    req.collection.findOne({_id: id(req.params.id)},(err, elemento) =>{
        if (err) return next(err);
        res.json(elemento);
    });
});

app.post('/api/:coleccion', auth, (req, res, next) =>{
    const elemento = req.body;

    if(!elemento.nombre) {
        res.status(400).json ({
            error: 'Bad Data',
            description: 'Se precisa al menos un campo <nombre>'
        });
    } else {
        req.collection.save(elemento, (err, coleccionGuardada) => {
            if (err) return next(err);
            res.json(coleccionGuardada);
        });
    }
});

app.put('/api/:coleccion/:id', auth, (req, res, next) => {
    let elementoId = req.params.id;
    let elementoNuevo = req.body;
    req.collection.update({_id: id(elementoId)},
        {$set: elementoNuevo}, {sasfe: true, multi: false}, (err,elementoModif) => {
            if(err) return next(err);
            res.json(elementoModif);
        });
});

app.delete('/api/:coleccion/:id', auth, (req, res, next) => {
    let elementoId = req.params.id;

    req.collection.remove({_id: id(elementoId)}, (err, resultado) =>{
        if (err) return next(err);
        res.json(resultado);
    });
});

//iniciamos la app

https.createServer(OPTIONS_HTTPS, app).listen(port, () => {
    console.log(`SEC WS API REST CRUD con DBejecutándose en https://localhost:${port}/api/:coleccion/:id`);
    
});
/*
app.listen(port, () => {
    console.log(`API REST ejecutándose en http://localhost:${port}/api/:coleccion/:id`);
    
});
*/