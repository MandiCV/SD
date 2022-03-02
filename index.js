'use strict'

const port = process.env.PORT || 3000;
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const logger = require('morgan');
const app = express();

// Declaro los middleware
app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Declaramos nuestras rutas, controladores y logica de negocioc

app.get('/api/product', getProductsController);

function getProductsController(req, res){
    //Aqui vendria la logica de negocio

    res.status(200).send({
        msg:"Ahí va la tabla productos solicitada",
        productos:[]
    });
}

app.get('/api/product/:productID', (req, res)=>{
    const id = req.params.productID;
            //Aqui vendria la logica de negocio
    res.status(200).send({
        msg: `Ahí va el producto ${id} solicitado`
    });
});

app.post('/api/product/', (req, res)=>{
    const newProduct = req.body;
    console.log(newProduct);

        //Aqui vendria la logica de negocio

    res.status(200).send({
        msg: `El producto se ha recibido`
    });

});

app.put('/api/product/:productID', (req, res)=>{
    const id = req.params.productID;
    const newData = req.body;

            //Aqui vendria la logica de negocio

    res.status(200).send({
        productos: `${req.params.productID}`,
        nuevoProducto: newData
    });

});
app.delete('/api/product/:productID', (req, res)=> {
    res.status(200).send({
        productos: `${req.params.productID}`
    });
});


app.listen(port, () => {
    console.log(`API REST ejecutándose en http://localhost:${port}/api/product`);
});