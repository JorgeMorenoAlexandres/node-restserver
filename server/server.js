require('./config/config');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json convierte el body del request en un json
app.use(bodyParser.json())

//configuración global de rutas
app.use(require('./controler/index'))

//Conexión a la base de mongodb
mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true },
    (err, res) => {
        if (err) throw err;
        console.log('Conectado a la base de datos');
    });

//validación de puerto local o producción
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);
})